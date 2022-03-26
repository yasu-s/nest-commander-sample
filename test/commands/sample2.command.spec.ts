import { ConsoleLogger } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { CommandTestFactory } from 'nest-commander-testing';
import { AppModule } from '../../src/app.module';

describe('Sample2Command', () => {
  let commandInstance: TestingModule;
  let logger: ConsoleLogger;

  beforeEach(async () => {
    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [AppModule],
    })
      .overrideProvider(ConsoleLogger)
      .useValue({ log: jest.fn() })
      .compile();

    logger = commandInstance.get<ConsoleLogger>(ConsoleLogger);
  });

  it('run method', async () => {
    await CommandTestFactory.run(commandInstance, ['sample2']);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
