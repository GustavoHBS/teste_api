"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToxicologicalMapper = void 0;
const examsToxicological_entity_1 = require("../../base/database/entities/examsToxicological.entity");
class ToxicologicalMapper {
    static documentToDto(document) {
        return {
            amostra: document.amostra,
            codigo_amostra: document.codigo_amostra,
            amostraPositiva: document.amostraPositiva,
        };
    }
}
exports.ToxicologicalMapper = ToxicologicalMapper;
//# sourceMappingURL=toxicological.formatter.js.map