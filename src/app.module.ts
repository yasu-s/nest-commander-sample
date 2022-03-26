import { Module, ConsoleLogger } from '@nestjs/common';
import { commands } from './commands';
import { services } from './services';

@Module({
  imports: [],
  providers: [...commands, ...services, ConsoleLogger],
})
export class AppModule {}
