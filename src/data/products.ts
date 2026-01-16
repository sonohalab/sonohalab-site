export interface Product {
  id: string;
  name: string;
  description: {
    ja: string;
    en: string;
  };
  platform: string;
  status: 'available' | 'coming-soon';
  url?: string;
  icon?: string;
}

export const products: Product[] = [
  {
    id: 'whenused',
    name: 'WhenUsed',
    description: {
      ja: 'アプリの使用履歴を記録し、振り返りをサポートするiOSアプリ',
      en: 'An iOS app that tracks your app usage history and helps you reflect on your digital habits',
    },
    platform: 'iOS',
    status: 'available',
    url: '#', // Replace with actual App Store URL
    icon: '/assets/whenused-icon.png',
  },
  {
    id: 'chrome-extension',
    name: 'Chrome Extension',
    description: {
      ja: 'ブラウジングをもっと便利にする拡張機能',
      en: 'A browser extension to enhance your browsing experience',
    },
    platform: 'Chrome',
    status: 'coming-soon',
  },
  {
    id: 'web-service',
    name: 'Web Service',
    description: {
      ja: 'シンプルで役立つWebツール',
      en: 'Simple and useful web tools',
    },
    platform: 'Web',
    status: 'coming-soon',
  },
];
