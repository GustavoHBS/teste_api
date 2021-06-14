import { IExamToxicologicalDTO } from '../interfaces/examToxicologicalDTO.interface';
import { IProcessToxicologicalResponse } from '../interfaces/processToxicologicalResponse.interface';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';

export interface IToxicologicalService {
  processExam(
    sample: IToxicologicalSample,
  ): Promise<IProcessToxicologicalResponse>;
  findAllExams(): Promise<IExamToxicologicalDTO[]>;
  findExamByCodigoAmostra(sampleCod: string): Promise<IExamToxicologicalDTO>;
}
