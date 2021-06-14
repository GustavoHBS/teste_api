import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToxicologicalFormatter } from 'src/exam/formatters/toxicological.formatter';
import { IToxicologicalSample } from 'src/exam/interfaces/toxicologicalSample.interface';
import {
  ExamsToxicologicalEntity,
  ExamToxicologicalDocument,
} from '../../../base/database/entities/examsToxicological.entity';
import { IToxicologicalModel } from '../toxicologicalModel.interface';

@Injectable()
export class ToxicologicalModel implements IToxicologicalModel {
  constructor(
    @InjectModel(ExamsToxicologicalEntity.name)
    private examsEntity: Model<ExamToxicologicalDocument>,
  ) {}

  async create(
    sample: IToxicologicalSample,
    isPositveSample: boolean,
  ): Promise<ExamToxicologicalDocument> {
    await this.validateCodigoAmostra(sample.codigo_amostra);
    const examDoc = ToxicologicalFormatter.sampleToDocument(
      sample,
      isPositveSample,
    );
    const exam = new this.examsEntity(examDoc);
    return exam.save();
  }

  async findAll() {
    return this.examsEntity.find();
  }

  async findByCodigoAmostra(sampleCod: string) {
    return this.examsEntity.findOne({
      codigoAmostra: sampleCod,
    });
  }

  private async validateCodigoAmostra(
    sampleCod: string,
  ): Promise<void | never> {
    const result = await this.findByCodigoAmostra(sampleCod);
    if (result) {
      throw new BadRequestException({
        message: 'Esse codigo de amostra já foi cadastrado, use outro.',
      });
    }
  }
}
