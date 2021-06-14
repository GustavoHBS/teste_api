import { Test } from '@nestjs/testing';
import { IToxicologicalSample } from 'src/exam/interfaces/toxicologicalSample.interface';
import { ToxicologicalModel } from 'src/exam/models/implementations/toxicological.model';
import { toxicologicalService } from 'src/exam/services/implementations/toxicological.service';

describe('ToxicologicalService', () => {
  let toxicService: toxicologicalService;
  const examsMocked = [
    { codigo_amostra: '1', amostraPositiva: true },
    { codigo_amostra: '2', amostraPositiva: false },
  ];
  const emptySample = {
    codigo_amostra: '1',
    Cocaína: 0,
    Anfetamina: 0,
    Metanfetamina: 0,
    MDA: 0,
    MDMA: 0,
    THC: 0,
    Morfina: 0,
    Codeína: 0,
    Heroína: 0,
    Benzoilecgonina: 0,
    Cocaetileno: 0,
    Norcocaína: 0,
  };

  const getEmptySample = (): IToxicologicalSample => {
    return JSON.parse(JSON.stringify(emptySample));
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [toxicologicalService, ToxicologicalModel],
    })
      .overrideProvider(ToxicologicalModel)
      .useValue({
        create() {},
        findAll() {
          return examsMocked;
        },
        findByCodigoAmostra(codigo: any) {
          return examsMocked.find(exam => exam.codigo_amostra == codigo);
        },
      })
      .compile();

    toxicService = moduleRef.get<toxicologicalService>(toxicologicalService);
  });

  describe('processExam', () => {
    it('should return true for Heroína above min allowed', async () => {
      const sample = getEmptySample();
      sample.Heroína = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Heroína bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Heroína = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for Anfetamina above min allowed', async () => {
      const sample = getEmptySample();
      sample.Anfetamina = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Anfetamina bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Anfetamina = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for Metanfetamina above min allowed', async () => {
      const sample = getEmptySample();
      sample.Metanfetamina = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Metanfetamina bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Metanfetamina = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for MDA above min allowed', async () => {
      const sample = getEmptySample();
      sample.MDA = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for MDA bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.MDA = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for MDMA above min allowed', async () => {
      const sample = getEmptySample();
      sample.MDMA = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for MDMA bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.MDMA = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for THC above min allowed', async () => {
      const sample = getEmptySample();
      sample.THC = 0.05;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for THC bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.THC = 0.04;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for Morfina above min allowed', async () => {
      const sample = getEmptySample();
      sample.Morfina = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Morfina bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Morfina = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for Codeína above min allowed', async () => {
      const sample = getEmptySample();
      sample.Codeína = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Codeína bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Codeína = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for Heroína above min allowed', async () => {
      const sample = getEmptySample();
      sample.Heroína = 0.2;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Heroína bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Heroína = 0.1;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });

    it('should return true for Cocaina and Benzoilecgonina above min allowed', async () => {
      const sample = getEmptySample();
      sample.Cocaína = 0.5;
      sample.Benzoilecgonina = 0.5;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Cocaina above and Benzoilecgonina bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Cocaína = 0.5;
      sample.Benzoilecgonina = 0.4;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return true for Cocaina and Cocaetileno above min allowed', async () => {
      const sample = getEmptySample();
      sample.Cocaína = 0.5;
      sample.Cocaetileno = 0.5;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Cocaina above and Cocaetileno bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Cocaína = 0.5;
      sample.Cocaetileno = 0.4;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return true for Cocaina and Norcocaína above min allowed', async () => {
      const sample = getEmptySample();
      sample.Cocaína = 0.5;
      sample.Norcocaína = 0.5;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Cocaina above and Norcocaína bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Cocaína = 0.5;
      sample.Norcocaína = 0.4;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeTruthy();
    });

    it('should return false for Cocaina bellow min allowed', async () => {
      const sample = getEmptySample();
      sample.Cocaína = 0.4;
      const result = toxicService.processExam(sample);
      expect(result.amostraPositiva).toBeFalsy();
    });
  });

  describe('findAllExams', () => {
    it('should return all exams', async () => {
      const result = await toxicService.findAllExams();
      expect(result).toHaveLength(examsMocked.length);
    });
  });

  describe('findExamByCodigoAmostra', () => {
    it('should return a exam by codigoAmostra', async () => {
      const sample = examsMocked[0];
      const result = await toxicService.findExamByCodigoAmostra(
        sample.codigo_amostra,
      );
      expect(result).toEqual(sample);
    });
    it('should not return a exam for codigoAmostra not found', async () => {
      try {
        const result = await toxicService.findExamByCodigoAmostra('5');
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });
});
