import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Response as ResponseDecorator,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/base/guards/jwt-auth.guard';
import { IToxicologicalSample } from '../interfaces/toxicologicalSample.interface';
import { IToxicologicalService } from '../services/toxicologicalService.interface';

@Controller('/exam')
export class ExamController {
  constructor(
    @Inject('toxicologicalService')
    private toxicologicalService: IToxicologicalService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/toxicological')
  toxicologicalExam(@Body() toxicologicalSample: IToxicologicalSample): any {
    return this.toxicologicalService.processExam(toxicologicalSample);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/toxicological')
  findToxicologicalExams(): any {
    return this.toxicologicalService.findAllExams();
  }

  @UseGuards(JwtAuthGuard)
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
