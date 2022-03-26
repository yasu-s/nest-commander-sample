import { Module, ConsoleLogger } from '@nestjs/common';
import { AppService } from './app.service';
import { Sample1Command } from './sample1.command';
import { Sample2Command } from './sample2.command';

@Module({
  imports: [],
  providers: [AppService, Sample1Command, Sample2Command, ConsoleLogger],
})
export class AppModule {}
