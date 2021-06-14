import { IProcessToxicologicalResponse } from 'src/exam/interfaces/processToxicologicalResponse.interface';
import { IToxicologicalModel } from 'src/exam/models/toxicologicalModel.interface';
import { IToxicologicalSample } from '../../interfaces/toxicologicalSample.interface';
import { IToxicologicalService } from '../toxicologicalService.interface';
export declare class toxicologicalService implements IToxicologicalService {
    private examsModel;
    constructor(examsModel: IToxicologicalModel);
    private readonly CUT_RECORD;
    processExam(sample: IToxicologicalSample): IProcessToxicologicalResponse;
    private hasDrugsInSample;
    private testCocaineInEvidence;
    private saveExam;
    findAllExams(): Promise<any>;
    findExamByCodigoAmostra(sampleCod: string): Promise<import("../../interfaces/examToxicologicalDTO.interface").IExamToxicologicalDTO>;
}
