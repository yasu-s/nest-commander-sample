# nest-commander-sample

## 概要

- nest-commander

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

# SampleCommand実行(デフォルトCommand)
node dist/main --id=123 hoge hogeee
node dist/main sample --id=123 hoge hogeee

# Sample2Command実行
node dist/main sample2 
```

## 実行結果

<img width="715" alt="nest-commander3" src="https://user-images.githubusercontent.com/2668146/160101286-5b87ff92-2ab2-4004-b79d-f1ec3275c55a.png">

## 参考URL

- https://docs.nestjs.com/recipes/nest-commander

