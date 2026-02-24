import { NestFactory } from '@nestjs/core';
import { CreditManagementModule } from './credit-management/credit-management.module';

async function bootstrap() {
  const app = await NestFactory.create(CreditManagementModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
