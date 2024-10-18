import { Logger } from '@nestjs/common';
import { CommandRunner, Command, Option } from 'nest-commander';

/** コマンドライン引数で渡す変数の型管理 */
type CommandOptions = {
  id?: number;
};

@Command({
  // コマンドライン引数で`sample1`を指定することで起動可能
  name: 'sample1',
  // isDefault=true: コマンドライン引数を指定しない場合に起動できる。アプリケーション内で1つのみ指定可能
  options: { isDefault: true },
})
export class Sample1Command extends CommandRunner {
  /**
   * --idの数字変換処理
   * --id=数字を指定するとrunのoptions.idに値が設定される
   */
  @Option({
    flags: '--id [number]',
  })
  parseId(value: string): number {
    return Number(value);
  }

  /**
   * @Command.nameで呼び出された時に実行される処理
   */
  async run(passedParams: string[], options?: CommandOptions): Promise<void> {
    Logger.log({ passedParams, options }, Sample1Command.name);
    return Promise.resolve();
  }
}
