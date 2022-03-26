import { Module, ConsoleLogger } from '@nestjs/common';
import { AppService } from './app.service';
import { commands } from './commands';

@Module({
  imports: [],
  providers: [AppService, ...commands, ConsoleLogger],
})
export class AppModule {}
