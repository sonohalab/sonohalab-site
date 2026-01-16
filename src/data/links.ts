export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/sonohalab',
    icon: 'github',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: '#', // Replace with actual URL
    icon: 'x',
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    url: '#', // Replace with actual URL
    icon: 'bluesky',
  },
  {
    id: 'threads',
    name: 'Threads',
    url: '#', // Replace with actual URL
    icon: 'threads',
  },
];

export const contactEmail = 'hello@sonohalab.com';
