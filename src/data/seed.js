"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var entities_1 = require("../entities");
var faker_1 = require("@faker-js/faker");
var users_json_1 = require("./users.json");
var channels_json_1 = require("./channels.json");
var episode_json_1 = require("./episode.json");
var chatConfig_json_1 = require("./chatConfig.json");
var entities = [
    entities_1.User,
    entities_1.Channel,
    entities_1.ChatConfig,
    entities_1.Chatter,
    entities_1.Chat,
    entities_1.Episode,
];
var AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: entities,
    synchronize: true,
    dropSchema: true,
});
var getUser = function (username) { return users_json_1.default.find(function (user) { return user.username === username; }); };
var getChannelData = function (owner) { return channels_json_1.default.find(function (channel) { return channel.owner === owner; }); };
var getChatConfigs = function (name) { return chatConfig_json_1.default.filter(function (config) { return config.channel === name; }); };
await AppDataSource.initialize();
var repository = {
    users: AppDataSource.getRepository(entities_1.User),
    channel: AppDataSource.getRepository(entities_1.Channel),
    chatConfig: AppDataSource.getRepository(entities_1.ChatConfig),
    chatter: AppDataSource.getRepository(entities_1.Chatter),
    chat: AppDataSource.getRepository(entities_1.Chat),
    episode: AppDataSource.getRepository(entities_1.Episode),
};
var createUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, usersData_1, user, newUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, usersData_1 = users_json_1.default;
                _a.label = 1;
            case 1:
                if (!(_i < usersData_1.length)) return [3 /*break*/, 4];
                user = usersData_1[_i];
                newUser = entities_1.User.create(user);
                newUser.password = 'password';
                return [4 /*yield*/, repository.users.save(newUser)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
var createChatters = function () { return __awaiter(void 0, void 0, void 0, function () {
    var channels, _i, usersData_2, _user, user, newChatter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, repository.channel.find()];
            case 1:
                channels = _a.sent();
                _i = 0, usersData_2 = users_json_1.default;
                _a.label = 2;
            case 2:
                if (!(_i < usersData_2.length)) return [3 /*break*/, 6];
                _user = usersData_2[_i];
                return [4 /*yield*/, repository.users.findOne({ where: { username: _user.username } })];
            case 3:
                user = _a.sent();
                newChatter = entities_1.Chatter.create({
                    user: user,
                    nickname: user.username,
                    channel: channels[faker_1.faker.number.int({ min: 0, max: channels.length - 1 })]
                });
                return [4 /*yield*/, repository.chatter.save(newChatter)];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 2];
            case 6: return [2 /*return*/];
        }
    });
}); };
var createChannel = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var user, data, newChannel;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, repository.users.findOne({
                    where: {
                        username: username
                    }
                })];
            case 1:
                user = _a.sent();
                data = __assign(__assign({}, getChannelData(username)), { owner: user });
                newChannel = entities_1.Channel.create(data);
                return [4 /*yield*/, repository.channel.save(newChannel)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var createChatConfigs = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var channel, configs, _i, configs_1, config;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, repository.channel.findOne({
                    where: {
                        name: name
                    }
                })];
            case 1:
                channel = _a.sent();
                configs = getChatConfigs(name)
                    .map(function (config) { return (__assign(__assign({}, config), { channel: channel })); });
                _i = 0, configs_1 = configs;
                _a.label = 2;
            case 2:
                if (!(_i < configs_1.length)) return [3 /*break*/, 5];
                config = configs_1[_i];
                return [4 /*yield*/, repository.chatConfig.save(config)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); };
var createEpisodes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, episodesData_1, episode, channel, newEpisode;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, episodesData_1 = episode_json_1.default;
                _a.label = 1;
            case 1:
                if (!(_i < episodesData_1.length)) return [3 /*break*/, 5];
                episode = episodesData_1[_i];
                return [4 /*yield*/, repository.channel.findOne({ where: { name: episode.channel } })];
            case 2:
                channel = _a.sent();
                newEpisode = entities_1.Episode.create(__assign(__assign({}, episode), { start: new Date(episode.start), end: new Date(episode.end), channel: channel }));
                return [4 /*yield*/, repository.episode.save(newEpisode)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); };
var createChats = function (channelName_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([channelName_1], args_1, true), void 0, function (channelName, count) {
        var channels, users, channel, message, chatConfigs_1, chatConfig, newChat;
        if (count === void 0) { count = 20; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, repository.channel.find({ where: { name: channelName } })];
                case 1:
                    channels = _a.sent();
                    return [4 /*yield*/, repository.users.find({ take: 10 })];
                case 2:
                    users = _a.sent();
                    _a.label = 3;
                case 3:
                    if (!(count > 0)) return [3 /*break*/, 6];
                    channel = channels[faker_1.faker.number.int({ min: 0, max: channels.length - 1 })];
                    message = faker_1.faker.lorem.sentence({ min: 10, max: 20 });
                    return [4 /*yield*/, repository.chatConfig.find({
                            where: {
                                channel: channel
                            }
                        })];
                case 4:
                    chatConfigs_1 = _a.sent();
                    chatConfig = chatConfigs_1[faker_1.faker.number.int({ min: 0, max: chatConfigs_1.length - 1 })];
                    newChat = entities_1.Chat.create({
                        message: message,
                        channel: channel,
                        price: chatConfig.price
                    });
                    return [4 /*yield*/, repository.chat.save(newChat)];
                case 5:
                    _a.sent();
                    count--;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
};
await createUsers();
await createChatters();
await createChannel(getUser('BigTech').username);
await createChannel(getUser('NickFuentes').username);
await createChatConfigs('bigtech');
await createChatConfigs('nickjfuentes');
await createEpisodes();
await createChats('bigtech', 20);
await createChats('nickjfuentes', 20);
