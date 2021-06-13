import { Module } from '@nestjs/common';
import { ExamModule } from './exam/exam.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [DatabaseModule, ExamModule, ConfigModule.forRoot(), AuthModule],
})
export class AppModule {}
