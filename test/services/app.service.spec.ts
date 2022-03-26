import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../../src/services';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  it('getHello', async () => {
    // exercise
    const actual = await appService.getHello();

    // verify
    expect(actual).toBe('Hello World!');
  });
});
