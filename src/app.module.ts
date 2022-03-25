import { Module } from '@nestjs/common';
import { SampleCommand } from './sample.command';

@Module({
  imports: [],
  providers: [SampleCommand],
})
export class AppModule {}
