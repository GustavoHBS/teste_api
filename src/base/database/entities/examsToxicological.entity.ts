import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExamToxicologicalDocument = ExamsToxicologicalEntity & Document;

@Schema({
  collection: 'exams_toxicological',
})
export class ExamsToxicologicalEntity {
  @Prop({
    required: true,
  })
  codigoAmostra: string;

  @Prop({
    required: true,
  })
  amostraPositiva: boolean;

  @Prop({
    type: {},
  })
  amostra: any;
}

export const examsToxicologicalSchema = SchemaFactory.createForClass(
  ExamsToxicologicalEntity,
);
