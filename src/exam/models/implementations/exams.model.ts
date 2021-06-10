import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IToxicologicalSample } from 'src/exam/interfaces/toxicologicalSample.interface';
import {
  ExamsEntity,
  ExamDocument,
} from '../../../database/entities/exams.entity';
import { IExamsModel } from '../examsModel.interface';

@Injectable()
export class ExamsModel implements IExamsModel {
  constructor(
    @InjectModel(ExamsEntity.name) private examsEntity: Model<ExamDocument>,
  ) {}

  create(
    sample: IToxicologicalSample,
    isPositveSample: boolean,
  ): Promise<ExamDocument> {
    const examDto = {
      codigo_amostra: sample.codigo_amostra,
      amostraPositiva: isPositveSample,
      amostra: sample,
    };
    const exam = new this.examsEntity(examDto);
    return exam.save();
  }
}
