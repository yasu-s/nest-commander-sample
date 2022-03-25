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
