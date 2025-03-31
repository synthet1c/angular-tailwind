import {DataSource} from 'typeorm';
import {ChannelEntity, ChatConfigEntity, ChatEntity, ChatterEntity, EpisodeEntity, UserEntity} from '../server/entities';
import {faker} from '@faker-js/faker';

import usersData from './users.json';
import channelsData from './channels.json';
import episodesData from './episode.json';
import chatConfigs from './chatConfig.json';
import {Chat, Utils} from '#models';
import Timezone = Utils.Timezone;
import {generateRandomCreatedAt} from './generateRandomCreatedAt';

const entities = [
  UserEntity,
  ChannelEntity,
  ChatConfigEntity,
  ChatterEntity,
  ChatEntity,
  EpisodeEntity,
];

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities,
  synchronize: true,
  dropSchema: true,
});

const getUser = (username: string) => usersData.find((user: Partial<UserEntity>) => user.username === username);
const getChannelData = (owner: string) => channelsData.find((channel) => channel.owner === owner);
const getChatConfigs = (name: string) => chatConfigs.filter((config) => config.channel === name);

console.log('SEEDING: start');
await AppDataSource.initialize();
console.log('SEEDING: initialized');

const repository = {
  users: AppDataSource.getRepository(UserEntity),
  channel: AppDataSource.getRepository(ChannelEntity),
  chatConfig: AppDataSource.getRepository(ChatConfigEntity),
  chatter: AppDataSource.getRepository(ChatterEntity),
  chat: AppDataSource.getRepository(ChatEntity),
  episode: AppDataSource.getRepository(EpisodeEntity),
}

const createUsers = async () => {
  console.log('SEEDING: createUsers');
  // Create the new users
  for (const user of usersData) {
    const newUser = UserEntity.create(user);
    newUser.password = 'password';
    await repository.users.save(newUser);
  }
}


const createChatters = async () => {
  console.log('SEEDING: createChatters');
  // Create the new users
  const channels = await repository.channel.find()
  for (const _user of usersData) {
    const user = await repository.users.findOne({ where: { username: _user.username }})
    const newChatter = ChatterEntity.create({
      user: user,
      nickname: user.username,
      channel: channels[faker.number.int({ min: 0, max: channels.length - 1 })]
    });
    await repository.chatter.save(newChatter);
  }
}


const createChannel = async (username: string) => {
  console.log('SEEDING: createChannel');
  const user = await repository.users.findOne({
    where: {
      username: username
    }
  });
  const data: Partial<ChannelEntity> = {
    ...getChannelData(username),
    owner: user,
  };
  const newChannel = ChannelEntity.create(data);
  await repository.channel.save(newChannel);
}


const createChatConfigs = async (name: string) => {
  console.log('SEEDING: createChatConfigs');
  const channel = await repository.channel.findOne({
    where: {
      url: name
    }
  });
  const configs = getChatConfigs(name)
    .map((config) => ({
      ...config,
      channel: channel,
    }));

  for (const config of configs) {
    await repository.chatConfig.save(config);
  }
}


const createEpisodes = async () => {
  console.log('SEEDING: createEpisodes');
  for (const episode of episodesData) {
    const channel = await repository.channel.findOne({ where: { name: episode.channel }})
    const newEpisode = EpisodeEntity.create({
      ...episode,
      start: new Date(episode.start),
      end: new Date(episode.end),
      timezone: Timezone.en_AU,
      channel,
    });
    await repository.episode.save(newEpisode)
  }
}


const createChats = async (channelName: string, count = 20) => {
  console.log('SEEDING: createChats');
  const channel = await repository.channel.findOne({ where: { url: channelName }})
  const chatters = await repository.chatter.find({ take: 10 });
  const chats = [];

  while (count > 0) {
    const chatter = chatters[faker.number.int({ min: 0, max: chatters.length - 1 })];
    const message = faker.lorem.sentence({ min: 10, max: 20 })
    const chatConfigs = await repository.chatConfig.find({
      where: {
        channel: {
          url: channel.url
        }
      },
    });
    const maxConfigs = chatConfigs.length;
    const chatConfig = chatConfigs[Math.floor(Math.random() * maxConfigs)];
    chats.push({
      message,
      channel: channel,
      chatter: chatter,
      price: chatConfig.price,
      status: Chat.Status.NEW,
      createdAt: generateRandomCreatedAt(1),
    })
    count--;
  }

  chats.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

  for (const chat of chats) {
    const newChat = ChatEntity.create(chat);
    await repository.chat.save(newChat);
  }
}

await createUsers();
await createChannel(getUser('BigTech').username);
await createChannel(getUser('NickFuentes').username);
await createChatConfigs('bigtech');
await createChatConfigs('nickjfuentes');
await createChatters();
await createEpisodes();
await createChats('bigtech', 20);
await createChats('nickjfuentes', 20);




