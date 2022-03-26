import { ConsoleLogger } from '@nestjs/common';
import { CommandRunner, Command } from 'nest-commander';

@Command({
  name: 'sample2',
})
export class Sample2Command implements CommandRunner {
  constructor(private readonly logger: ConsoleLogger) {}

  async run(passedParams: string[], options?: Record<string, unknown>): Promise<void> {
    this.logger.log({ passedParams, options }, Sample2Command.name);
    return Promise.resolve();
  }
}
