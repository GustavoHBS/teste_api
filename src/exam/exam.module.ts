import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ExamsEntity } from 'src/database/entities/exams.entity';
import { ExamController } from './controllers/exam.controller';
import { ExamsModel } from './models/implementations/exams.model';
import { toxicologicalService } from './services/implementations/toxicological.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ExamController],
  providers: [toxicologicalService, ExamsModel, ExamsEntity],
})
export class ExamModule {}
