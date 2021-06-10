import { Module } from '@nestjs/common';
import { ExamModule } from './exam/exam.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), ExamModule],
})
export class AppModule {}
