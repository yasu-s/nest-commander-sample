import { Module, ConsoleLogger } from '@nestjs/common';
import { AppService } from './app.service';
import { SampleCommand } from './sample.command';

@Module({
  imports: [],
  providers: [AppService, SampleCommand, ConsoleLogger],
})
export class AppModule {}
