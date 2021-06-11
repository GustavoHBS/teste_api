import { ExamToxicologicalDocument } from 'src/database/entities/examsToxicological.entity';
import { IExamToxicologicalDTO } from '../interfaces/examToxicologicalDTO.interface';

export class ToxicologicalMapper {
  static documentToDto(
    document: ExamToxicologicalDocument,
  ): IExamToxicologicalDTO {
    return {
      amostra: document.amostra,
      codigo_amostra: document.codigo_amostra,
      amostraPositiva: document.amostraPositiva,
    };
  }
}
