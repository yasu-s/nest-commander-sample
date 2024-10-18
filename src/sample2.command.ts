import { Logger } from '@nestjs/common';
import { CommandRunner, Command } from 'nest-commander';

@Command({
  name: 'sample2',
})
export class Sample2Command extends CommandRunner {
  /**
   * @Command.nameで呼び出された時に実行される処理
   */
  async run(passedParams: string[], options?: Record<string, unknown>): Promise<void> {
    Logger.log({ passedParams, options }, Sample2Command.name);
    return Promise.resolve();
  }
}
