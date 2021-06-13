import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamsToxicologicalEntity, examsToxicologicalSchema } from './entities/examsToxicological.entity';

const entities = MongooseModule.forFeature([
  {
    name: ExamsToxicologicalEntity.name,
    schema: examsToxicologicalSchema,
  },
]);

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.DATABASE_URL})
    }),
    entities
  ],
  providers: [],
  exports: [entities],
})
export class DatabaseModule {}
