import { Injectable } from '@nestjs/common';
import { IToxicologicalCutRecord } from 'src/exam/interfaces/toxicologicalCutRecord.interface';
import { IToxicologicalSample } from '../../interfaces/toxicologicalSample.interface';
import { IToxicologicalService } from '../toxicologicalService.interface';

@Injectable()
export class toxicologicalService implements IToxicologicalService {
  private readonly CUT_RECORD: IToxicologicalCutRecord = {
    Cocaína: 0.5,
    Anfetamina: 0.2,
    Metanfetamina: 0.2,
    MDA: 0.2,
    MDMA: 0.2,
    THC: 0.05,
    Morfina: 0.2,
    Codeína: 0.2,
    Heroína: 0.2,
  };

  async processExam(sample: IToxicologicalSample) {
    const isPositiveSample = this.hasDrugsInSample(sample);
    return {
      codigo_amostra: sample.codigo_amostra,
      amostraPositiva: isPositiveSample,
    };
  }

  private hasDrugsInSample(sample: IToxicologicalSample): boolean {
    return Object.keys(this.CUT_RECORD).some(key => {
      const evidence = sample[key];
      const quantityDrug = this.CUT_RECORD[key];
      let hasDrugs = evidence >= quantityDrug;
      if (hasDrugs && key === 'Cocaína') {
        hasDrugs = this.testCocaineInEvidence(sample);
      }
      return hasDrugs;
    });
  }

  private testCocaineInEvidence(sample: IToxicologicalSample): boolean {
    const COCAINE_MIN_CONCENTRATION = 0.05;
    return (
      sample.Benzoilecgonina >= COCAINE_MIN_CONCENTRATION ||
      sample.Cocaetileno >= COCAINE_MIN_CONCENTRATION ||
      sample.Norcocaína >= COCAINE_MIN_CONCENTRATION
    );
  }
}
