import { ConsoleLogger } from '@nestjs/common';
import { CommandRunner, Command, Option } from 'nest-commander';
import { AppService } from './app.service';

type CommandOptions = {
  id?: number;
};

@Command({
  name: 'sample',
  options: { isDefault: true },
})
export class SampleCommand implements CommandRunner {
  constructor(private readonly appService: AppService, private readonly logger: ConsoleLogger) {}

  @Option({
    flags: '--id [number]',
  })
  parseId(value: string): number {
    return Number(value);
  }

  async run(passedParams: string[], options?: CommandOptions): Promise<void> {
    this.logger.log({ passedParams, options }, SampleCommand.name);
    const txt = await this.appService.getHello();
    this.logger.log(txt, SampleCommand.name);
  }
}
