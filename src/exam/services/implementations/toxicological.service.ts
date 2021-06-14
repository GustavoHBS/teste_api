import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ExamToxicologicalDocument } from 'src/base/database/entities/examsToxicological.entity';
import { ToxicologicalFormatter } from 'src/exam/formatters/toxicological.formatter';
import { IProcessToxicologicalResponse } from 'src/exam/interfaces/processToxicologicalResponse.interface';
import { IToxicologicalCutRecord } from 'src/exam/interfaces/toxicologicalCutRecord.interface';
import { IToxicologicalModel } from 'src/exam/models/toxicologicalModel.interface';
import { IToxicologicalSample } from '../../interfaces/toxicologicalSample.interface';
import { IToxicologicalService } from '../toxicologicalService.interface';

@Injectable()
export class toxicologicalService implements IToxicologicalService {
  constructor(
    @Inject('ToxicologicalModel') private examsModel: IToxicologicalModel,
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

  async processExam(
    sample: IToxicologicalSample,
  ): Promise<IProcessToxicologicalResponse> {
    const isPositiveSample = this.hasDrugsInSample(sample);
    await this.saveExam(sample, isPositiveSample);
    return {
      codigoAmostra: sample.codigo_amostra,
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
  ): Promise<ExamToxicologicalDocument> {
    return this.examsModel.create(sample, isPositiveSample);
  }

  async findAllExams(): Promise<any> {
    const exams = await this.examsModel.findAll();
    return exams ? exams.map(ToxicologicalFormatter.documentToDto) : [];
  }

  async findExamByCodigoAmostra(sampleCod: string) {
    const exam = await this.examsModel.findByCodigoAmostra(sampleCod);
    if (!exam) {
      throw new Error('Nenhuma exame foi encontrado para o codigo enviado.');
    }
    return ToxicologicalFormatter.documentToDto(exam);
  }
}
