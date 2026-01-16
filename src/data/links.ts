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
    name: 'X',
    url: 'https://x.com/sonohalab',
    icon: 'x',
  },
];

export const contactEmail = 'hello@sonohalab.com';
