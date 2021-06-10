import { ExamDocument } from 'src/database/entities/exams.entity';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';

export interface IExamsModel {
  create(
    sample: IToxicologicalSample,
    isPositveSample: boolean,
  ): Promise<ExamDocument>;
}
