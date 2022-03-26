import { ConsoleLogger } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { CommandTestFactory } from 'nest-commander-testing';
import { AppModule } from '../../src/app.module';
import { AppService } from '../../src/services';

describe('Sample1Command', () => {
  let commandInstance: TestingModule;
  let logger: ConsoleLogger;
  let appService: AppService;

  beforeEach(async () => {
    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [AppModule],
    })
      .overrideProvider(ConsoleLogger)
      .useValue({ log: jest.fn() })
      .overrideProvider(AppService)
      .useValue({ getHello: jest.fn().mockReturnValue('hoge') })
      .compile();

    logger = commandInstance.get<ConsoleLogger>(ConsoleLogger);
    appService = commandInstance.get<AppService>(AppService);
  });

  it('run method', async () => {
    await CommandTestFactory.run(commandInstance, ['sample1', '--id=123']);
    expect(logger.log).toHaveBeenCalledTimes(2);
    expect(appService.getHello).toHaveBeenCalledTimes(1);
  });

  it('isDefault', async () => {
    await CommandTestFactory.run(commandInstance, []);
    expect(logger.log).toHaveBeenCalledTimes(2);
    expect(appService.getHello).toHaveBeenCalledTimes(1);
  });
});
