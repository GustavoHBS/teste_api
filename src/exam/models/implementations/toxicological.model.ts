import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IToxicologicalSample } from 'src/exam/interfaces/toxicologicalSample.interface';
import {
  ExamsToxicologicalEntity,
  ExamToxicologicalDocument,
} from '../../../database/entities/examsToxicological.entity';
import { IToxicologicalModel } from '../toxicologicalModel.interface';

@Injectable()
export class ToxicologicalModel implements IToxicologicalModel {
  constructor(
    @InjectModel(ExamsToxicologicalEntity.name) private examsEntity: Model<ExamToxicologicalDocument>,
  ) {}

  create(
    sample: IToxicologicalSample,
    isPositveSample: boolean,
  ): Promise<ExamToxicologicalDocument> {
    const examDto = {
      codigo_amostra: sample.codigo_amostra,
      amostraPositiva: isPositveSample,
      amostra: sample,
    };
    console.log(examDto)
    const exam = new this.examsEntity(examDto);
    return exam.save();
  }

  async findAll(){
    return this.examsEntity.find();
  }

  async findByCodigoAmostra(sampleCod: string){
    return this.examsEntity.findOne({
      codigo_amostra: sampleCod
    });
  }
}
