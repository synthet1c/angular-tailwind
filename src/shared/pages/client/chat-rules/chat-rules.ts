export interface ChatRule {
  key: string;
  name: string;
  description: string;
  type: string;
  types?: ChatRule[]
}

export const CHAT_RULES: ChatRule[] = [
  {
    key: 'minPrice',
    name: 'Minimum Price',
    description: 'The minimum price for the chat.',
    type: 'number',
  },
  {
    key: 'maxPrice',
    name: 'Maximum Price',
    description: 'The maximum price for the chat.',
    type: 'number',
  },
  {
    key: 'price',
    name: 'Exact Price',
    description: 'The price for the chat.',
    type: 'number',
  },
  {
    key: 'pricePerChar',
    name: 'Price Per Character',
    description: 'Price charged for each character.',
    type: 'number',
  },
  {
    key: 'minChar',
    name: 'Minimum Character Count',
    description: 'Minimum Character count to qualify',
    type: 'number',
  },
  {
    key: 'maxChar',
    name: 'Maximum Character Count',
    description: 'Maximum Character count to qualify',
    type: 'number',
  },
  {
    key: 'videoLength',
    name: 'Video Length',
    description: 'The maximum accepted video length (in seconds).',
    type: 'number',
  },
];

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
