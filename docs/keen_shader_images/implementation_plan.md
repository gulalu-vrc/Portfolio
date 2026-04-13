# Keen カラーバリエーション・ASE画像追加計画

Keenの「カラーバリエーション対応シェーダー」セクションに、実際のビジュアル素材（カラーバリエーション画像とAmplify Shader Editorのグラフ画像）を表示するためのレイアウト修正を行います。

## ユーザーレビューが必要な事項
- 現在 `images/Keen/` フォルダ内にはハッシュ形式のファイル名（例: `34617-408-e47ebb...webp`）が多数存在しますが、特定の画像名が決定している場合は、それに置き換えます。
- ユーザーのフィードバックに基づき、`images/Keen/` フォルダ内の既存の画像ファイルを「仮の画像」として指定し、表示を確認できるようにします。
    - `images/Keen/34617-408-b2e54af7b3eee446a60657e71450fe93-1920x1080.webp`（カラーバリエーション仮）
    - `images/Keen/34617-408-12682ac40a3e65e3e40298dc65531fb4-1920x1080.webp`（ASEグラフ仮）

## 提案する変更

### Keen プロジェクト

#### [MODIFY] [index.html](file:///g:/Git/Portfolio/index.html)

現在のプレースホルダー（1787-1789行目付近）を削除し、以下の2枚の画像を並べる構造に更新します。

```html
<!-- 画像表示エリア -->
<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
    <!-- カラーバリエーション -->
    <div class="glass" style="...">
        <img src="images/Keen/34617-408-b2e54af7b3eee446a60657e71450fe93-1920x1080.webp" ...>
        <div style="...">カラーバリエーション対応</div>
    </div>
    <!-- Amplify Shader -->
    <div class="glass" style="...">
        <img src="images/Keen/34617-408-12682ac40a3e65e3e40298dc65531fb4-1920x1080.webp" ...>
        <div style="...">Amplify Shader Editorによる実装</div>
    </div>
</div>
```

## 検証計画

### 手動確認
- ブラウザで表示を確認し、2つの画像が縦に並び、他のコンテンツと重なっていないこと。
- ガラス質感（glassクラス）やキャプションのスタイルが一貫していること。
- レスポンシブ表示でレイアウトが崩れないこと。
