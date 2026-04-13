# Keen 「使用ツール」からギャラリーへの変更計画

Keenプロジェクトの3枚目「運用を考えたシェーダー設計（応用・価値）」セクションにおいて、右カラム下部の「使用ツール」リストを削除し、4枚の画像を2x2で配置する画像ギャラリーに刷新します。

## 変更内容

### Keen プロジェクト

#### [MODIFY] [index.html](file:///g:/Git/Portfolio/index.html)

- **セクションの削除**: 右カラム（`layout-right`）下部の「使用ツール」セクション（1814行目〜1826行目付近）を削除します。
- **ギャラリーの追加**: `image-grid-2x2` クラスを使用した画像ギャラリーを追加します。
- **コンテンツ**: `images/Keen/` 内の既存WebPファイルを4枚割り当て、視覚的な実績提示を強化します。

## 具体的な修正案（抜粋）

```html
<!-- 画像ギャラリー (2x2) -->
<div class="image-grid-2x2" style="margin-top: auto;">
    <img src="images/Keen/34617-408-b2e54af7b3eee446a60657e71450fe93-1920x1080.webp" alt="Gallery 1">
    <img src="images/Keen/34617-408-c3ed1baa8acadafb37d62b8a51b224d7-1920x1080.webp" alt="Gallery 2">
    <img src="images/Keen/34617-408-4f41a77644abeb649c8ee217d95b5f45-1920x1080.webp" alt="Gallery 3">
    <img src="images/Keen/34617-408-618dc79c8bbbeed8b5e5fa83dac3b1ca-1920x1080.webp" alt="Gallery 4">
</div>
```

## 検証計画

### 手動確認
- 上部の「クライアント評価と継続案件」ブロックとのバランスを確認。ギャラリーがカラムの最下部に綺麗に収まっていること。
- 4枚の画像が2x2の均等なグリッドで表示されているか。
- モバイル表示時にグリッドが崩れないか。
