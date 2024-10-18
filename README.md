# nest-commander-sample

## 概要

- nest-commanderを使用したサンプルコードです。

## 動作環境

- Node.js - 20.x
- yarn - 1.22.x

## 使用ライブラリ

- nestjs - 10.x
- nest-commander - 3.15.x

## 動作確認

```bash
# Node.jsパッケージインストール
yarn

# ビルド
yarn build

# Sample1Command実行(デフォルトCommand)
node dist/main --id=123
node dist/main sample1 --id=123

# Sample2Command実行
node dist/main sample2
```

## 実行結果

<img width="809" alt="img" src="https://github.com/user-attachments/assets/fd8956d9-98f6-4dc4-8a7e-f308505b49ce">

## 参考URL

- https://docs.nestjs.com/recipes/nest-commander
- https://nest-commander.jaymcdoniel.dev/

