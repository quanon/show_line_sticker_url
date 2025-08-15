# Show LINE Sticker URL

LINE STORE で LINE スタンプを画像をクリックすると URL を表示します。

## 機能

LINE STORE で LINE スタンプを画像をクリックすると、画像の URL が画面右上に表示されます。

## インストール方法

1. Chrome で `chrome://extensions/` を開く
2. 「デベロッパーモード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリックする
4. このフォルダを選択する

## 使用方法

1. https://store.line.me/stickershop/product/ のページを開く
2. 任意のスタンプ画像をクリックする
3. 画像の URL が画面右上に表示される
4. URL テキストをクリックしてコピー
5. Open ボタンをクリックすると、別タブで URL を開く

## ファイル構成

- `manifest.json`: 拡張機能の設定ファイル
- `content.js`: メイン機能のスクリプト
