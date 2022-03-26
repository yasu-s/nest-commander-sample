import { Logger } from '@nestjs/common';
import { CommandRunner, Command, Option } from 'nest-commander';

type CommandOptions = {
  id?: number;
};

@Command({
  name: 'sample',
  options: { isDefault: true },
})
export class SampleCommand implements CommandRunner {
  @Option({
    flags: '--id [number]',
  })
  parseId(value: string): number {
    return Number(value);
  }

  async run(passedParams: string[], options?: CommandOptions): Promise<void> {
    Logger.log({ passedParams, options }, SampleCommand.name);
    return Promise.resolve();
  }
}
