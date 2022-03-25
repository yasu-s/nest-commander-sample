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

# 実行
node dist/main --id=123 hoge hogeee
```

## 実行結果

<img width="700" alt="nest-commander2" src="https://user-images.githubusercontent.com/2668146/160084007-d9df0ac9-f12c-4df2-b880-5bba4835bcba.png">


## サンプルソース

```typescript
import { Logger } from '@nestjs/common';
import { CommandRunner, Command, Option } from 'nest-commander';

type CommandOptions = {
  id?: number;
};

@Command({
  name: 'run',
  options: { isDefault: true },
})
export class SampleCommand implements CommandRunner {
  @Option({
    flags: '--id [number]',
  })
  parseId(value: string): number {
    return Number(value);
  }

  run(passedParams: string[], options?: CommandOptions): Promise<void> {
    Logger.log({ passedParams, options });
    return Promise.resolve();
  }
}
```

## 参考URL

- https://docs.nestjs.com/recipes/nest-commander

