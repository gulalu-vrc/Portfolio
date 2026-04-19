# イラストレーション・トップページ背景の更新計画

イラストレーションセクションのトップページを、アトリエパンダセクションと同様の「アニメーション付きマーキー背景」を持つデザインに更新します。

## ユーザー確認事項
- **背景画像**: 現在 `images/Illustrations` フォルダにある4枚の画像（Coconara, Haguruma, forest, poster_sugar3）を繰り返し使用して背景を作成します。
- **構成の変更**: アトリエパンダのトップページ（ヒーローセクション）と同様に、左側のメイン画像カラムを廃止し、背景全体で作品を見せる構成に変更します。

## 変更内容

### [index.html](file:///g:/Git/Portfolio/index.html)
- `id="work-illustrations"` の最初の `work-page-section` を修正：
    - `position: relative; overflow: hidden; background: #0a0a0a;` を追加。
    - `panda-marquee-bg` と同様の構造を追加し、イラスト画像（4枚）を並べたマーキーを作成。
    - `marquee-overlay` を追加し、テキストの可読性を確保。
    - `work-split-layout` を調整し、左側の画像カラム（`work-image-col`）を削除。

### [style.css](file:///g:/Git/Portfolio/style.css)
- 特になし（既存の `panda-marquee-bg` 関連クラスをそのまま利用します）。

## 検証計画
- イラストセクションを表示した際に、背景画像が左右に動いていることを確認。
- テキストが背景に埋もれず、以前と同様に見やすくなっていることを確認。
- レスポンシブ表示で背景が崩れないことを確認。
