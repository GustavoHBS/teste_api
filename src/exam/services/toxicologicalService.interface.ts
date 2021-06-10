import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';

export interface IToxicologicalService {
  processExam(sample: IToxicologicalSample): any;
}
