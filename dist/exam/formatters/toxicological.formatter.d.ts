import { ExamToxicologicalDocument } from 'src/base/database/entities/examsToxicological.entity';
import { IExamToxicologicalDTO } from '../interfaces/examToxicologicalDTO.interface';
export declare class ToxicologicalMapper {
    static documentToDto(document: ExamToxicologicalDocument): IExamToxicologicalDTO;
}
