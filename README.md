# nest-commander-sample

## 概要

- nest-commanderのサンプルコードです。

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
node dist/main sample1 --id=123 hoge hogeee

# Sample2Command実行
node dist/main sample2 
```

## 実行結果

```bash
% node dist/main --id=123 hoge hogeee
[Nest] 2079  - 2022/03/26 12:31:47     LOG [NestFactory] Starting Nest application...
[Nest] 2079  - 2022/03/26 12:31:47     LOG [InstanceLoader] CommandRootModule dependencies initialized +27ms
[Nest] 2079  - 2022/03/26 12:31:47     LOG [InstanceLoader] DiscoveryModule dependencies initialized +1ms
[Nest] 2079  - 2022/03/26 12:31:47     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 2079  - 2022/03/26 12:31:47     LOG [InstanceLoader] CommandRunnerModule dependencies initialized +0ms
[Nest] 2079  - 2022/03/26 12:31:47     LOG [Sample1Command] Object:
{
  "passedParams": [
    "hoge",
    "hogeee"
  ],
  "options": {
    "id": 123
  }
}

[Nest] 2079  - 2022/03/26 12:31:47     LOG [Sample1Command] Hello World!

% node dist/main sample1 --id=123 hoge hogeee
[Nest] 2091  - 2022/03/26 12:32:09     LOG [NestFactory] Starting Nest application...
[Nest] 2091  - 2022/03/26 12:32:09     LOG [InstanceLoader] CommandRootModule dependencies initialized +29ms
[Nest] 2091  - 2022/03/26 12:32:09     LOG [InstanceLoader] DiscoveryModule dependencies initialized +1ms
[Nest] 2091  - 2022/03/26 12:32:09     LOG [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 2091  - 2022/03/26 12:32:09     LOG [InstanceLoader] CommandRunnerModule dependencies initialized +1ms
[Nest] 2091  - 2022/03/26 12:32:09     LOG [Sample1Command] Object:
{
  "passedParams": [
    "hoge",
    "hogeee"
  ],
  "options": {
    "id": 123
  }
}

[Nest] 2091  - 2022/03/26 12:32:09     LOG [Sample1Command] Hello World!

% node dist/main sample2 
[Nest] 2108  - 2022/03/26 12:32:27     LOG [NestFactory] Starting Nest application...
[Nest] 2108  - 2022/03/26 12:32:27     LOG [InstanceLoader] CommandRootModule dependencies initialized +28ms
[Nest] 2108  - 2022/03/26 12:32:27     LOG [InstanceLoader] DiscoveryModule dependencies initialized +0ms
[Nest] 2108  - 2022/03/26 12:32:27     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 2108  - 2022/03/26 12:32:27     LOG [InstanceLoader] CommandRunnerModule dependencies initialized +0ms
[Nest] 2108  - 2022/03/26 12:32:27     LOG [Sample2Command] Object:
{
  "passedParams": [],
  "options": {}
}
```

## 参考URL

- https://docs.nestjs.com/recipes/nest-commander

