import { Module } from '@nestjs/common';
import { ExamModule } from './exam/exam.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [DatabaseModule, ExamModule, ConfigModule.forRoot()],
})
export class AppModule {}
