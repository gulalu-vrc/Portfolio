# 展開スライド式サイドバー実装タスク

- `[x]` 1. **タスクの作成**（本タスクリストの作成）
- `[x]` 2. **`index.html` の構造変更**
  - `<nav class="glass top-nav">` を廃止
  - サイドバー内にメインメニュー（Home, About, Contact）を追加
  - 全てのリンクを「アイコン（Feather）＋ テキスト用 `<span class="sidebar-text">`」の構造に変更
- `[x]` 3. **`style.css` のスタイル調整**
  - トップナビ用の設定（`.top-nav`）を全削除
  - `.sidebar` を細い幅（65px）に変更し、`overflow: hidden;` を追加
  - `.sidebar:hover` で展開（260px）するアニメーションを定義
  - `.sidebar-text` の透明度（`opacity`）アニメーションの設定を定義
  - `.main-content` のマージンを常時 `65px`（展開の影響を受けず最大化）に変更
- `[x]` 4. **`script.js` 確認**
  - アイコンが動的生成されるため、特段修正不要であることを確認
- `[x]` 5. **動作確認・Docs同期**
  - `walkthrough.md` の作成とファイルの整理（`docs/expandable_sidebar`）
