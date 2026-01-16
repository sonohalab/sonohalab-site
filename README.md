# sonohalab-site

sonohalab の公式サイト。Astro + Tailwind CSS で構築。

## ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（http://localhost:4321）
npm run dev

# 本番用ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## プロジェクト構成

```
├── public/             # 静的アセット
│   ├── assets/         # 画像、アイコンなど
│   ├── _headers        # Cloudflare Pages ヘッダー設定
│   ├── _redirects      # Cloudflare Pages リダイレクト設定
│   └── favicon.svg
├── src/
│   ├── components/     # Astro コンポーネント
│   ├── data/           # コンテンツデータ（TypeScript）
│   ├── layouts/        # 共通レイアウト
│   └── pages/          # ページ
├── astro.config.mjs    # Astro 設定
├── tailwind.config.mjs # Tailwind CSS 設定
└── tsconfig.json       # TypeScript 設定
```

## ページ一覧

| パス | 説明 |
|------|------|
| `/` | トップページ（プロダクト一覧、SNSリンク、連絡先） |
| `/now` | 今やっていること |
| `/support` | サポート（FAQ、お問い合わせ） |
| `/privacy` | プライバシーポリシー |
| `/press` | プレスキット |
| `/404` | カスタム404ページ |

## コンテンツの編集

### プロダクトの追加・編集
`src/data/products.ts` を編集:

```typescript
export const products: Product[] = [
  {
    id: 'product-id',
    name: 'Product Name',
    description: { ja: '日本語説明', en: 'English description' },
    platform: 'iOS',
    status: 'available', // または 'coming-soon'
    url: 'https://...',
    icon: '/assets/icon.png',
  },
];
```

### SNSリンクの編集
`src/data/links.ts` を編集。

### サイト設定の編集
`src/data/site.ts` を編集。

## Cloudflare Pages へのデプロイ

### 設定値

| 項目 | 値 |
|------|-----|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node.js version | `20` |

### 環境変数

特になし（必要に応じて追加）

### 手順

1. Cloudflare Pages ダッシュボードで「Create a project」
2. GitHub リポジトリ `sonohalab/sonohalab-site` を接続
3. 上記の設定値を入力
4. 「Save and Deploy」

### カスタムドメインの設定

デプロイ後、Cloudflare Pages の「Custom domains」から `sonohalab.com` を追加。

## 技術スタック

- [Astro](https://astro.build/) v5 - 静的サイトジェネレーター
- [Tailwind CSS](https://tailwindcss.com/) v3 - スタイリング
- [TypeScript](https://www.typescriptlang.org/) - 型安全性

## ライセンス

Private - All rights reserved.
