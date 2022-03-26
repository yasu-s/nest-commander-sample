import { Module } from '@nestjs/common';
import { Sample1Command } from './sample1.command';
import { Sample2Command } from './sample2.command';

@Module({
  imports: [],
  providers: [Sample1Command, Sample2Command],
})
export class AppModule {}
