import { ConsoleLogger } from '@nestjs/common';
import { CommandRunner, Command, Option } from 'nest-commander';
import { AppService } from '../services';

type CommandOptions = {
  id?: number;
};

@Command({
  name: 'sample1',
  options: { isDefault: true },
})
export class Sample1Command extends CommandRunner {
  constructor(
    private readonly appService: AppService,
    private readonly logger: ConsoleLogger,
  ) {
    super();
  }

  @Option({
    flags: '--id [number]',
  })
  parseId(value: string): number {
    return Number(value);
  }

  async run(passedParams: string[], options?: CommandOptions): Promise<void> {
    this.logger.log({ passedParams, options }, Sample1Command.name);
    const txt = await this.appService.getHello();
    this.logger.log(txt, Sample1Command.name);
  }
}
