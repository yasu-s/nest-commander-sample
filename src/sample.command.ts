import { Logger } from '@nestjs/common';
import { CommandRunner, Command } from 'nest-commander';
import { AppService } from './app.service';

@Command({
  name: 'run',
})
export class SampleCommand implements CommandRunner {
  private readonly logger = new Logger(SampleCommand.name);

  constructor(private readonly appService: AppService) {}

  async run(passedParams: string[], options: Record<string, any>): Promise<void> {
    this.logger.debug({ passedParams });
    this.logger.log({ options });
    const txt = await this.appService.getHello();
    this.logger.log(txt);
  }
}
