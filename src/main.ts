import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const SERVER_PORT = process.env.SERVER_PORT;
console.log(SERVER_PORT, process.env.DATABASE_URL)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT, () => {
    console.log(`Server start in port ${SERVER_PORT}`);
  });
}
bootstrap();
