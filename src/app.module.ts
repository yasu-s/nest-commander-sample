import { Module } from '@nestjs/common';
import { SampleCommand } from './sample.command';
import { Sample2Command } from './sample2.command';

@Module({
  imports: [],
  providers: [SampleCommand, Sample2Command],
})
export class AppModule {}
