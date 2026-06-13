# Portfolio

米山莉世のポートフォリオサイトです。 GitHub Pages にデプロイ。

## 技術スタック

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
![Next.js](https://img.shields.io/badge/Next.js-16.2.7-000000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-06B6D4?style=for-the-badge&logo=tailwindcss)
![daisyUI](https://img.shields.io/badge/DaisyUI-5.5.23-5A0EF8?style=for-the-badge&logo=daisyui)

## 主なページ

- `/` - トップページ、自己紹介、スキル、制作物一覧
- `/career` - 経歴
- `/works/disaster-info` - 「災害情報おしらせアプリ」紹介ページ
- `/works/favo-log-1` - 「お気に入り記録１」紹介ページ

## ディレクトリ構成

```text
app/
  page.tsx              # トップページ
  layout.tsx            # 共通レイアウト
  globals.css           # グローバルCSS、Tailwind CSS設定
  career/page.tsx       # 経歴詳細ページ
  works/*/page.tsx      # 制作物詳細ページ
components/
  AboutMe.tsx           # 自己紹介
  Skills.tsx            # スキル一覧
  Works.tsx             # 制作物一覧
  Worksframe.tsx        # 制作物カード
  Footer.tsx            # フッター
public/images/          # 画像・技術ロゴ
```

## セットアップ

Node.js 22 以上を使用してください。

```bash
npm install
```

## 開発環境での起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

## 動作確認

```bash
npm install # 依存関係をインストール
npm run dev # 開発サーバーを起動
```

### npm スクリプト

- `npm run dev`: 開発サーバーを起動する
- `npm run build`: 本番用にプロジェクトをビルドする
- `npm run lint`: ESLint でコードをチェックする
- `npm run lint:fix`: ESLint でコードを修正する
