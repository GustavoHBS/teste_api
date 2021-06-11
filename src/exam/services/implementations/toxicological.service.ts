import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ExamDocument } from 'src/database/entities/exams.entity';
import { IToxicologicalCutRecord } from 'src/exam/interfaces/toxicologicalCutRecord.interface';
import { IExamsModel } from 'src/exam/models/examsModel.interface';
import { IToxicologicalSample } from '../../interfaces/toxicologicalSample.interface';
import { IToxicologicalService } from '../toxicologicalService.interface';

@Injectable()
export class toxicologicalService implements IToxicologicalService {
  constructor(
    @InjectConnection() private connection: Connection,
    @Inject('ExamsModel') private examsModel: IExamsModel,
  ) {}

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

  processExam(sample: IToxicologicalSample) {
    const isPositiveSample = this.hasDrugsInSample(sample);
    this.saveExam(sample, isPositiveSample);
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

  private saveExam(
    sample: IToxicologicalSample,
    isPositiveSample: boolean,
  ): Promise<ExamDocument> {
    return this.examsModel.create(sample, isPositiveSample);
  }
}
