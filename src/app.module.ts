import { Module } from '@nestjs/common';
import { ExamModule } from './exam/exam.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './base/database/database.module';
@Module({
  imports: [DatabaseModule, ExamModule, ConfigModule.forRoot(), AuthModule],
})
export class AppModule {}
