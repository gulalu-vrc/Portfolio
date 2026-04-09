# アトリエパンダ 背景アニメーション追加とレイアウトの復元

ユーザー様のフィードバックに基づき、アトリエパンダの1ページ目において、動的なマーキー背景を追加しつつ、メインのレイアウト構成を元の左右分割スタイルに戻しました。

## 修正内容

### 1. 動的背景（マーキー）の継続採用
- 背景に上下2段の画像（1-4番、5-8番）が別方向にゆっくり流れる演出を維持しました。
- `marquee-overlay` により、動きのある背景の上でもコンテンツが埋没しないよう調整しています。

### 2. レイアウト構成の復元
- 先の修正で変更した中央揃えの構成を撤回し、元の **`work-split-layout`（左側に製品画像、右側に説明文）** に戻しました。
- 左側のメイン画像（`hero.png`）の背後でマーキーが流れることで、奥行き感と「ショップの多様性」を同時に表現しています。
- 各 Feather アイコンやボタンの配置も元の位置に復元されました。

## 修正ファイル
- [index.html](file:///g:/Git/Portfolio/index.html)

## 関連ドキュメント
- [実装計画](file:///g:/Git/Portfolio/docs/atelier_panda_background_animation/implementation_plan.md)
- [タスクリスト](file:///g:/Git/Portfolio/docs/atelier_panda_background_animation/task.md)
