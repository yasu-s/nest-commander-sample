import { Sample1Command } from './sample1.command';
import { Sample2Command } from './sample2.command';

export * from './sample1.command';
export * from './sample2.command';

export const commands = [Sample1Command, Sample2Command];
