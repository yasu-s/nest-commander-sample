import { Module, ConsoleLogger } from '@nestjs/common';
import { AppService } from './app.service';
import { SampleCommand } from './sample.command';
import { Sample2Command } from './sample2.command';

@Module({
  imports: [],
  providers: [AppService, SampleCommand, Sample2Command, ConsoleLogger],
})
export class AppModule {}
