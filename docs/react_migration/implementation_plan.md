# React (Vite+TypeScript) 環境への移行計画

現在の静的なWebページ（`index.html` + `style.css` + `script.js`）を、コンポーネント指向で運用しやすく、パフォーマンスに優れた最新のReactアプリケーションに再構築します。

## 変更内容とアプローチ

### 1. 既存ファイルのバックアップ
現在の `index.html`, `style.css`, `script.js` 等は一旦 `legacy/` ディレクトリに退避し、必要に応じていつでもプレーンなHTML構成を参照・復元できるようにします。

### 2. Vite + React + TypeScript のセットアップ
現在のディレクトリ `g:/Git/Portfolio/` 上に、最新のReactビルド環境である「Vite」を用いてプロジェクトを構築します。
- **UIライブラリ**: React
- **主要言語**: TypeScript (型の導入により、後から拡張しても壊れにくいコード環境にします)
- **ビルドツール**: Vite

### 3. コンポーネント分割と実装 (Component Architecture)
巨大な `index.html` (1150行以上) を、再利用可能なReactコンポーネントに美しく分割します：
- `src/App.tsx`: 全体のレイアウト管理
- `src/components/Sidebar.tsx`: 左側の追従サイドバー
- `src/components/Hero.tsx`: トップ画面（名前・自己紹介・スキルなど）
- `src/components/WorkSection.tsx`: 各作品のセクションブロック（これを利用してコードの重複を大幅に減らします）
- `src/components/Footer.tsx`: フッター

### 4. 機能（JavaScript）のReact化
`script.js` に記述されていた処理をReactの世界に置き換えます。
- **Featherアイコン**: `lucide-react` パッケージを導入し、Reactネイティブなモダンアイコンシステムに移行します。
- **スクロールアニメーション (Fade-In)**: Reactのライフサイクル (`useEffect`) を用いるか、カスタムフック化して、スクロール時のフェードインを実現します。
- **ScrollSpy (サイドバーのハイライト連動)**: Intersection Observer API を用いたカスタムHookを作成し、Reactの状態（State）として現在表示中のセクションを管理・連動させます。

## User Review Required

> [!IMPORTANT]  
> 実行すると、モダンな開発環境(Node.js + React)へとプロジェクト構造が大きく生まれ変わります！
> 今後デザインや文章を微修正する場合は、HTMLではなく `src/components` 内のReact (`.tsx`) ファイルを編集することになります。
> 
> この構成でReact化の作業を進めてよろしいでしょうか？承認いただけましたら、すべて自動で環境構築とコード・デザインの移行を実施します！

## Verification Plan

### 自動テスト / 動作確認
- `npm run build` を実行し、TypeScriptコンパイルやビルドエラーが出ないことを確認する。
- 開発サーバー (`npm run dev`) を立ち上げ、すべてのコンポーネントが正常に読み込めるかをコマンドラインから確認。

### 実機・目視での検証項目
- 前回のデザイン（シームレスなグラデーション、画像の表示、グラスモーフィズム処理）がReact上でも全く同じように再現されていること。
- スクロールした際に、サイドバーの現在地（アクティブな作品名）が正しくハイライトされること。
