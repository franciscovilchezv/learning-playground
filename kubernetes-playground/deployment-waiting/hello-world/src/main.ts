import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const TOTAL = 10000000000;
  const STEP = 100000000;
  for (let i = 0; i < TOTAL; i++) {
    if (i % STEP === 0) {
      console.log(i);
      console.log(`[${(TOTAL - i) / STEP}] Waiting...`);
    }
  }

  await app.listen(80);
}
bootstrap();
