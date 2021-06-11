import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

export type ExamDocument = ExamsEntity & Document;

@Schema({
  collection: 'exams',
})
export class ExamsEntity {
  @Prop({
    unique: true,
    required: true,
  })
  codigo_amostra: string;

  @Prop({
    required: true,
  })
  amostraPositiva: boolean;

  @Prop({
    type: {},
  })
  amostra: any;
}

export const examsSchema = SchemaFactory.createForClass(ExamsEntity);
