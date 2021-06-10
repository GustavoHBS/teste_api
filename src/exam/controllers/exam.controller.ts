import { Body, Controller, Inject, Post } from '@nestjs/common';
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
}
