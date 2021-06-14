import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ExamsToxicologicalEntity,
  examsToxicologicalSchema,
} from './entities/examsToxicological.entity';
import { UsersEntity, usersSchema } from './entities/users.entity';

const entities = MongooseModule.forFeature([
  {
    name: ExamsToxicologicalEntity.name,
    schema: examsToxicologicalSchema,
  },
  {
    name: UsersEntity.name,
    schema: usersSchema,
  },
]);

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DATABASE_URL,
      }),
    }),
    entities,
  ],
  providers: [],
  exports: [entities],
})
export class DatabaseModule {}
