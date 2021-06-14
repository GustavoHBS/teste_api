import { Document } from 'mongoose';
export declare type ExamToxicologicalDocument = ExamsToxicologicalEntity & Document;
export declare class ExamsToxicologicalEntity {
    codigo_amostra: string;
    amostraPositiva: boolean;
    amostra: any;
}
export declare const examsToxicologicalSchema: import("mongoose").Schema<Document<ExamsToxicologicalEntity, any>, import("mongoose").Model<any, any, any>, undefined>;
