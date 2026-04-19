# 複数プロジェクトへのリンクボタン追加 - Walkthrough

各プロジェクトセクションのヒーローセクション（1ページ目）に、外部サイト（BOOTH、VRChat、紹介記事）へのリンクボタンを追加しました。

## 修正内容

### 1. PreciousHarmony
- 2つの紹介記事ボタンを追加しました。
    - **4Gamer**: `https://www.4gamer.net/games/794/G079439/20250214049/`
    - **メタカルフロンティア**: `https://metacul-frontier.com/?p=20983`

### 2. 深海博物館ル・リエー (VirtualDiceParty)
- VRChatワールドへのリンクボタンを追加しました。
    - **VRChat**: `https://vrchat.com/home/world/wrld_ae57dbb4-6763-460a-b453-92df7fe80b6d/info`

### 3. 大手前大学オープンキャンパス
- VRChatワールドへのリンクボタンを追加しました。
    - **VRChat**: `https://vrchat.com/home/world/wrld_01eaec4b-0a06-41de-acb9-e77a5e782065/info`

### 4. イノセント・ガーデンドレス
- BOOTH商品ページへのリンクボタンを追加しました。
    - **BOOTH**: `https://booth.pm/ja/items/6359328`

## デザインの統一
- すべてのボタンには既存の `.glass-btn` クラスを適用し、ガラスモーフィズムのデザインを維持しています。
- リンク先の内容に合わせて適切なアイコン（`file-text`, `external-link`, `shopping-cart`）を設定しました。

## 検証結果
- HTMLの構造が崩れていないことを確認しました。
- 各ボタンが `target="_blank"` で正しく設定されていることを確認しました。
