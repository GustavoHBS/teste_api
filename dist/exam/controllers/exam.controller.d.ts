import { Response } from 'express';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';
import { IToxicologicalService } from '../services/toxicologicalService.interface';
export declare class ExamController {
    private toxicologicalService;
    constructor(toxicologicalService: IToxicologicalService);
    toxicologicalExam(toxicologicalSample: IToxicologicalSample): any;
    findToxicologicalExams(): any;
    findToxicologicalExamByCodigoAmostra(params: any, res: Response): Promise<any>;
}
