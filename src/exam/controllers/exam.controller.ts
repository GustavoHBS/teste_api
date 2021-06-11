import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Response as ResponseDecorator,
} from '@nestjs/common';
import { Response } from 'express';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';
import { IToxicologicalService } from '../services/toxicologicalService.interface';

@Controller('/exam')
export class ExamController {
  constructor(
    @Inject('toxicologicalService')
    private toxicologicalService: IToxicologicalService,
  ) {}

  @Post('/toxicological')
  toxicologicalExam(@Body() toxicologicalSample: IToxicologicalSample): any {
    return this.toxicologicalService.processExam(toxicologicalSample);
  }

  @Get('/toxicological')
  findToxicologicalExams(): any {
    return this.toxicologicalService.findAllExams();
  }

  @Get('/toxicological/:sampleCod')
  async findToxicologicalExamByCodigoAmostra(
    @Param() params: any,
    @ResponseDecorator() res: Response,
  ): Promise<any> {
    return this.toxicologicalService
      .findExamByCodigoAmostra(params.sampleCod)
      .then(result => res.send(result))
      .catch(err => res.status(404).send({ message: err.message }));
  }
}
