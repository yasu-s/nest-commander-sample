import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

async function bootstrap() {
  // nest-commanderのCommandFactoryにAppModuleを指定する
  // 出力されるログレベルを指定する（標準だとログ出力されないため）
  await CommandFactory.run(AppModule, ['warn', 'error', 'debug', 'log']);
}
bootstrap();
