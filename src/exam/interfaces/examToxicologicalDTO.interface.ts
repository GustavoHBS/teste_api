import { IToxicologicalSample } from './toxicologicalSample.interface';

export interface IExamToxicologicalDTO {
  codigoAmostra: string;
  amostraPositiva: boolean;
  amostra: IToxicologicalSample;
}
