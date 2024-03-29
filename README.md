# ChromeExtension for マネーフォワードクラウド勤怠
マネーフォワードクラウド勤怠のミス打刻を防ぐ拡張機能です。

```
2022年9月に打刻方法(ホーム画面)がリニューアルされます。
今後このプラグインは不要になります。
https://biz.moneyforward.com/support/attendance/news/new-feature/20220906.html
```

## 概要
[マネーフォワードクラウド勤怠](https://biz.moneyforward.com/attendance) のホーム画面にある出勤・退勤の打刻ボタンのstyleを時間によって変更するGoogleChrome拡張機能です。

## インストール
Chromeウェブストアに公開していないため、手動でインストールを行ってください。

1. 任意のディレクトリにソースコードを[zipダウンロード](https://github.com/nokonpt/mf-kintai-style-change/archive/refs/heads/main.zip)する
2. ダウンロードした **mf-kintai-style-change.zip** を展開（解凍）しておく
3. Chrome拡張機能の **デベロッパーモード** を有効にする
4. **パッケージ化されていない拡張機能の読み込み** から **mf-kintai-style-change** を指定してインストールする

## 出来ること
- Chrome拡張機能のをインストールするだけで、あとは時間になったら表示が変わります
- 出社時（8時〜9時）と退勤時(16時〜23時)に必要なボタンのみ表示されます
- 打刻の際に２度押しを防ぎます
- ウィンドウがアクティブになった際に画面をリロードします
- [マネーフォワードクラウド勤怠のホーム画面](https://attendance.moneyforward.com/my_page)のみで動作します

## 免責
勤怠は給与に直結する大切な部分でもありますので、免責も記載しておきます。
- 提供する機能は、マネーフォワードクラウド勤怠の仕様が変わると利用できなくなります
- 拡張機能は提供者の判断で、中断または停止することがあります
- この拡張機能の利用に起因または関連して、ユーザーが被ったいかなる損害も、作者は責任を負わないものとします
- [Google Chrome] バージョン: 96.0.4664.110の環境のみで動作確認済です
