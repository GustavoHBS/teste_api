"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toxicologicalService = void 0;
const common_1 = require("@nestjs/common");
const examsToxicological_entity_1 = require("../../../base/database/entities/examsToxicological.entity");
const toxicological_formatter_1 = require("../../formatters/toxicological.formatter");
const processToxicologicalResponse_interface_1 = require("../../interfaces/processToxicologicalResponse.interface");
const toxicologicalCutRecord_interface_1 = require("../../interfaces/toxicologicalCutRecord.interface");
const toxicologicalModel_interface_1 = require("../../models/toxicologicalModel.interface");
let toxicologicalService = class toxicologicalService {
    constructor(examsModel) {
        this.examsModel = examsModel;
        this.CUT_RECORD = {
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
    }
    processExam(sample) {
        const isPositiveSample = this.hasDrugsInSample(sample);
        this.saveExam(sample, isPositiveSample);
        return {
            codigo_amostra: sample.codigo_amostra,
            amostraPositiva: isPositiveSample,
        };
    }
    hasDrugsInSample(sample) {
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
    testCocaineInEvidence(sample) {
        const COCAINE_MIN_CONCENTRATION = 0.05;
        return (sample.Benzoilecgonina >= COCAINE_MIN_CONCENTRATION ||
            sample.Cocaetileno >= COCAINE_MIN_CONCENTRATION ||
            sample.Norcocaína >= COCAINE_MIN_CONCENTRATION);
    }
    saveExam(sample, isPositiveSample) {
        return this.examsModel.create(sample, isPositiveSample);
    }
    async findAllExams() {
        const exams = await this.examsModel.findAll();
        return exams ? exams.map(toxicological_formatter_1.ToxicologicalMapper.documentToDto) : [];
    }
    async findExamByCodigoAmostra(sampleCod) {
        const exam = await this.examsModel.findByCodigoAmostra(sampleCod);
        if (!exam) {
            throw new Error('Nenhuma exame foi encontrado para o codigo enviado.');
        }
        return toxicological_formatter_1.ToxicologicalMapper.documentToDto(exam);
    }
};
toxicologicalService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('ToxicologicalModel')),
    __metadata("design:paramtypes", [Object])
], toxicologicalService);
exports.toxicologicalService = toxicologicalService;
//# sourceMappingURL=toxicological.service.js.map