# Club4D 実績セクションへの画像エリア追加計画

Club4Dの「実運用プロダクトとしての実績」ページにおいて、販売実績とメディア実績の各項目に画像を挿入できるエリアを追加します。

## ユーザーレビューが必要な事項

> [!IMPORTANT]
> - **販売実績**: 現在のテキストボックスの下に、画像を3枚横並び（またはモバイルで縦並び）で表示するエリアを追加します。
> - **メディア実績**: 各リストアイテム（テレビ朝日、MOSAIC.WAV）の中に画像エリアを追加します。
> - 画像は仮として `images/Club4D/VRChat_2024-04-23_16-43-17.694_1920x1080-1024x576.webp` を使用します。

## 提案される変更

### [Component Name] 実績セクションのUI更新

#### [MODIFY] [index.html](file:///g:/Git/Portfolio/index.html)
- `section#work-club-4d` の最後にある「実運用プロダクトとしての実績」ページ（`work-detail-page section`）を修正します。
- **販売実績（左カラム）**:
  - 現在の `.glass` ボックスの下に、画像3枚を表示するグリッドコンテナを追加します。
- **メディア・外部実績（右カラム）**:
  - `li` 要素の構造を変更し、テキストの下に画像を配置できるようにします。
  - 各メディア項目に1枚ずつの画像を追加します。

## 修正後のイメージ（構造）

```html
<!-- 販売実績 -->
<div class="achievement-section">
  <div class="glass">...</div>
  <div class="achievement-images" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 15px;">
    <img src="..." style="...">
    <img src="..." style="...">
    <img src="..." style="...">
  </div>
</div>

<!-- メディア実績 -->
<li style="flex-direction: column; align-items: flex-start;">
  <div style="display: flex; align-items: center;">...テキスト...</div>
  <div style="margin-top: 10px; width: 100%;">
    <img src="..." style="width: 100%; border-radius: 8px;">
  </div>
</li>
```

## オープな質問

- 販売実績の3枚の画像は、16:9の横長画像と、Boothの商品画像のようなスクエア（正方形）画像のどちらを想定されていますか？（現在は16:9の横長で進めます）

## 検証計画

### 手動確認
- 販売実績の下に3枚の画像が表示されている。
- メディア実績の各項目の下に1枚ずつの画像が表示されている。
- 各デバイスサイズでレイアウトが崩れていない（特に販売実績の3枚並びがモバイルで適切に並ぶか）。
