import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamsEntity, examsSchema } from './entities/exams.entity';

console.log(process.env.DATABASE_URL)
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.DATABASE_URL})
    }),
  ],
  // providers: [ExamsEntity],
  // exports: [ExamsEntity],
})
export class DatabaseModule {}
