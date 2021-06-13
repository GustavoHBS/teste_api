import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/base/database/database.module';
import { ExamController } from './controllers/exam.controller';
import { ToxicologicalModel } from './models/implementations/toxicological.model';
import { toxicologicalService } from './services/implementations/toxicological.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ExamController],
  providers: [toxicologicalService, ToxicologicalModel],
})
export class ExamModule {}
