import { Model } from 'mongoose';
import { IToxicologicalSample } from 'src/exam/interfaces/toxicologicalSample.interface';
import { ExamToxicologicalDocument } from '../../../base/database/entities/examsToxicological.entity';
import { IToxicologicalModel } from '../toxicologicalModel.interface';
export declare class ToxicologicalModel implements IToxicologicalModel {
    private examsEntity;
    constructor(examsEntity: Model<ExamToxicologicalDocument>);
    create(sample: IToxicologicalSample, isPositveSample: boolean): Promise<ExamToxicologicalDocument>;
    findAll(): Promise<ExamToxicologicalDocument[]>;
    findByCodigoAmostra(sampleCod: string): Promise<ExamToxicologicalDocument>;
}
