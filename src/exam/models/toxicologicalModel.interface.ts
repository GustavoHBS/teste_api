import { ExamToxicologicalDocument } from 'src/database/entities/examsToxicological.entity';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';

export interface IToxicologicalModel {
  create(
    sample: IToxicologicalSample,
    isPositveSample: boolean,
  ): Promise<ExamToxicologicalDocument>;
}
