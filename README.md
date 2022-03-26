# nest-commander-sample

## 概要

- nest-commanderを使用したサンプルコードです。

## 動作環境

- Node.js - 16.x
- yarn - 1.22.x

## 使用ライブラリ

- nestjs - 8.x
- nest-commander - 2.4.x

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

<img width="695" alt="nest-commander4" src="https://user-images.githubusercontent.com/2668146/160223060-7ec45ca9-1444-4093-bd63-e194effdad97.png">

## 参考URL

- https://docs.nestjs.com/recipes/nest-commander

