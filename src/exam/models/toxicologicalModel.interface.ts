import { ExamToxicologicalDocument } from 'src/base/database/entities/examsToxicological.entity';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';

export interface IToxicologicalModel {
  create(
    sample: IToxicologicalSample,
    isPositveSample: boolean,
  ): Promise<ExamToxicologicalDocument>;

  findAll(): Promise<ExamToxicologicalDocument[] | undefined>;

  findByCodigoAmostra(
    sampleCod: string,
  ): Promise<ExamToxicologicalDocument | undefined>;
}
