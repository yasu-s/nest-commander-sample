import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SampleCommand } from './sample.command';

@Module({
  imports: [],
  providers: [AppService, SampleCommand],
})
export class AppModule {}
