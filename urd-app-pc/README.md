## Local 環境構築手順

1. プロジェクトをローカルに用意（git cloen）
2. `cd` コマンドでプロジェクトディレクトリに移動します（package.json と同じ階層）
3. `npm install` コマンドで必要なモジュールをインストール
4. .env ファイルを書き換えます（https://www.stock-app.jp/teams/sfz/dashboard/71031/stocks/256870/edit -> 環境変数一覧参照）
5. `npm build` コマンドでソースのビルド
6. `npm start` コマンドで React サーバー起動
7. `http://localhost:3000/`　にアクセス

以上。
