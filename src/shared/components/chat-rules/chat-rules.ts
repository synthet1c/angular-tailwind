export interface ChatRule {
  key: string;
  name: string;
  description: string;
  type: string;
  types?: ChatRule[]
  disabled?: boolean;
}

export const CHAT_RULES: ChatRule[] = [
  {
    key: 'price',
    name: 'Price',
    description: 'The price for the chat.',
    type: 'number',
  },
  {
    key: 'character',
    name: 'Character Count',
    description: 'Character count to qualify',
    type: 'number',
  },
  {
    key: 'word',
    name: 'Word Count',
    description: 'Word count to qualify',
    type: 'number',
  },
  {
    key: 'role',
    name: 'User role',
    description: 'User role to qualify',
    type: 'number',
    types: [
      {
        key: 'role.admin',
        name: 'Admin',
        description: 'Admin',
        type: 'string',
      }
    ]
  },
];

export interface ChatFeature {
  key: string;
  name: string;
  description: string;
  type: string;
  conditions?: ChatRule[];
  options?: ChatRule[];
}

export const CHAT_FEATURES = [
  {
    key: 'video',
    name: 'Video',
    description: 'Enable Video for this chat',
    type: 'boolean',
    conditions: [
      {
        key: 'video.length',
        name: 'Video Length',
        description: 'Video Length',
        type: 'number',
      }
    ],
    options: [
      {
        key: 'video.youtube',
        name: 'Youtube',
        description: 'Enable Youtube',
        type: 'multiple',
      },
      {
        key: 'video.facebook',
        name: 'Facebook',
        description: 'Enable Facebook',
        type: 'multiple',
      },
      {
        key: 'video.tiktok',
        name: 'TikTok',
        description: 'Enable TikTok',
        type: 'multiple',
      }
    ]
  },
  {
    key: 'voice',
    name: 'AI Voice',
    description: 'Enable AI Voice for this chat',
    type: 'boolean',
    options: [
      {
        key: 'voice.standard',
        name: 'Standard voices',
        description: 'Enable standard voices',
        type: 'boolean',
      },
      {
        key: 'voice.premium',
        name: 'Premium voices',
        description: 'Enable premium voices',
        type: 'boolean',
      },
      {
        key: 'voice.custom',
        name: 'Custom voices',
        description: 'Enable custom voices',
        type: 'boolean',
      }
    ]
  },
  {
    key: 'voice',
    name: 'AI Voice',
    description: 'Enable AI Voice for this chat',
    type: 'boolean',
  },
]

export const MEDIA = {
  key: 'media',
  name: 'Media',
  description: 'Media',
  type: 'media',
  types: [
    {
      key: 'Media.Video',
      name: 'Video',
      description: 'Youtube video',
      type: 'mp4'
    },
    {
      key: 'Media.AI',
      name: 'AI Voice',
      description: 'AI Voice',
      type: 'mp3'
    },
    {
      key: 'Media.image',
      name: 'Image',
      description: 'Image',
      type: 'image',
      types: [
        {
          key: 'Media.image.png',
          name: 'PNG Image',
          description: 'PNG Image',
          type: 'png'
        },
        {
          key: 'Media.image.jpeg',
          name: 'JPEG Image',
          description: 'JPEG Image',
          type: 'jpeg'
        },
        {
          key: 'Media.image.gif',
          name: 'GIF Image',
          description: 'GIF Image',
          type: 'gif'
        }
      ]
    },
    {
      key: 'Media.facebook',
      name: 'Facebook Post',
      description: 'Facebook Post',
      type: 'facebook'
    },
    {
      key: 'Media.x',
      name: 'X Post',
      description: 'X Post',
      type: 'x-post'
    },
    {
      key: 'Media.tiktok',
      name: 'TikTok Post',
      description: 'TikTok Post',
      type: 'tiktok'
    },
    {
      key: 'Media.instagram',
      name: 'Instagram Post',
      description: 'Instagram Post',
      type: 'instagram'
    }
  ]
};
