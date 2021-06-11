import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { ExamsEntity, examsSchema } from 'src/database/entities/exams.entity';
import { ExamController } from './controllers/exam.controller';
import { ExamsModel } from './models/implementations/exams.model';
import { toxicologicalService } from './services/implementations/toxicological.service';

@Module({
  imports: [DatabaseModule, MongooseModule.forFeature([
    {
      name: ExamsEntity.name,
      schema: examsSchema,
    },
  ]),],
  controllers: [ExamController],
  providers: [toxicologicalService, ExamsModel],
})
export class ExamModule {}
