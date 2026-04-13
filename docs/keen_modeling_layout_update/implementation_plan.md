# Keen モデリング解説レイアウト刷新計画

Keenプロジェクトの2枚目「リアルな素材表現とモデリング設計」セクションを、よりビジュアル重視の十字区切りグリッドレイアウト（2x2）に更新します。

## 変更内容

### Keen プロジェクト

#### [MODIFY] [index.html](file:///g:/Git/Portfolio/index.html)

- **レイアウト方式の変更**: 現在の2カラム構成（`four-page-layout`）を、ポートフォリオ内で共通して使用されている十字区切りグリッド（`results-cross-grid`）に置き換えます。
- **コンテンツの再配置**:
    - **左上 (Top-left)**: 現在の「リアルな素材表現の再現 (Substance Painter)」の技術解説テキストを配置。
    - **右上 (Top-right)**, **左下 (Bottom-left)**, **右下 (Bottom-right)**: それぞれ画像を **2枚横並び** で配置するスロットを作成。
- **削除項目**: 「効率と正確性を両立したモデリング」セクションを削除。
- **仮画像の割り当て**: `images/Keen/` 内の既存WebPファイルをプレースホルダーとして各スロットに割り当てます。

## 具体的な修正案

```html
<div class="results-cross-grid glass" style="border-top: 4px solid #4facfe; margin-top: 20px;">
    <!-- 左上: 技術解説 -->
    <div class="grid-cell text-cell">
        <i data-feather="droplet" style="color:#00f2fe; width:30px; height:30px; margin-bottom:15px;"></i>
        <h5 style="color:#00f2fe; font-size:1.1rem; border-bottom:1px solid rgba(0,242,254,0.3); padding-bottom:10px; width: 100%;">
            リアルな素材表現の再現 (Substance Painter)
        </h5>
        <ul style="padding-left:15px; margin-top:15px;">
            <li style="color:#ccc; margin-bottom:8px; font-size:0.95rem;">Substance Painterを使用し、実在する靴の質感を再現</li>
            <li style="color:#ccc; margin-bottom:8px; font-size:0.95rem;">ラバー、布、ステッチなど素材ごとの違いを表現</li>
            <li style="color:#ccc; font-size:0.95rem;">使用感や微細なディテールもテクスチャで再現</li>
        </ul>
    </div>

    <!-- 右上: 画像スロット1 (2枚横並び) -->
    <div class="grid-cell img-cell">
        <div style="display: flex; width: 100%; height: 100%; gap: 2px; background: rgba(255,255,255,0.1);">
            <img src="images/Keen/34617-408-3aeb022e5460d79a7a8a60f7be46ab34-1920x1080.webp" style="flex: 1; width: 50%;">
            <img src="images/Keen/34617-408-4f41a77644abeb649c8ee217d95b5f45-1920x1080.webp" style="flex: 1; width: 50%;">
        </div>
    </div>

    <!-- 左下: 画像スロット2 (2枚横並び) -->
    <div class="grid-cell img-cell">
        <div style="display: flex; width: 100%; height: 100%; gap: 2px; background: rgba(255,255,255,0.1);">
            <img src="images/Keen/34617-408-618dc79c8bbbeed8b5e5fa83dac3b1ca-1920x1080.webp" style="flex: 1; width: 50%;">
            <img src="images/Keen/34617-408-c3ed1baa8acadafb37d62b8a51b224d7-1920x1080.webp" style="flex: 1; width: 50%;">
        </div>
    </div>

    <!-- 右下: 画像スロット3 (2枚横並び) -->
    <div class="grid-cell img-cell">
        <div style="display: flex; width: 100%; height: 100%; gap: 2px; background: rgba(255,255,255,0.1);">
            <img src="images/Keen/34617-408-e47ebb71340f6cb9ae4ca0e258c7a8e7-1920x1080.webp" style="flex: 1; width: 50%;">
            <img src="images/Keen/34617-408-12682ac40a3e65e3e40298dc65531fb4-1920x1080.webp" style="flex: 1; width: 50%;">
        </div>
    </div>
</div>
```

## 検証計画

### 手動確認
- 2x2のグリッドがバランスよく表示されているか。
- 画像スロット内の2枚の画像が等幅で隙間なく（または意図した隙間で）配置されているか。
- ホバーエフェクト（拡大など）が個別に動作するか、あるいは2枚まとめて動作するかを確認し調整。
- モバイル表示時にグリッドが縦一列に正しくスタックされるか。
