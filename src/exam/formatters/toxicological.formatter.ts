import { ExamToxicologicalDocument } from 'src/base/database/entities/examsToxicological.entity';
import { ObjectUtils } from 'src/base/utils/object.utils';
import { IExamToxicologicalDTO } from '../interfaces/examToxicologicalDTO.interface';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';

export class ToxicologicalFormatter {
  static documentToDto(
    document: ExamToxicologicalDocument,
  ): IExamToxicologicalDTO {
    return {
      amostra: document.amostra,
      codigoAmostra: document.codigoAmostra,
      amostraPositiva: document.amostraPositiva,
    };
  }

  static sampleToDocument(
    sample: IToxicologicalSample,
    isPositveSample: boolean,
  ) {
    const clonedSample = ObjectUtils.cloneObject(sample);
    delete clonedSample.codigo_amostra;
    return {
      codigoAmostra: sample.codigo_amostra,
      amostraPositiva: isPositveSample,
      amostra: clonedSample,
    };
  }
}
