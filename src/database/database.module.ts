import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamsEntity } from './entities/exams.entity';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URL)],
  providers: [ExamsEntity],
  exports: [ExamsEntity],
})
export class DatabaseModule {}
