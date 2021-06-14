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
Object.defineProperty(exports, "__esModule", { value: true });
exports.examsToxicologicalSchema = exports.ExamsToxicologicalEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ExamsToxicologicalEntity = class ExamsToxicologicalEntity {
};
__decorate([
    mongoose_1.Prop({
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], ExamsToxicologicalEntity.prototype, "codigo_amostra", void 0);
__decorate([
    mongoose_1.Prop({
        required: true,
    }),
    __metadata("design:type", Boolean)
], ExamsToxicologicalEntity.prototype, "amostraPositiva", void 0);
__decorate([
    mongoose_1.Prop({
        type: {},
    }),
    __metadata("design:type", Object)
], ExamsToxicologicalEntity.prototype, "amostra", void 0);
ExamsToxicologicalEntity = __decorate([
    mongoose_1.Schema({
        collection: 'exams_toxicological',
    })
], ExamsToxicologicalEntity);
exports.ExamsToxicologicalEntity = ExamsToxicologicalEntity;
exports.examsToxicologicalSchema = mongoose_1.SchemaFactory.createForClass(ExamsToxicologicalEntity);
//# sourceMappingURL=examsToxicological.entity.js.map