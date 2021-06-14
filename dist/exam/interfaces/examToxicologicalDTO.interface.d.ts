import { IToxicologicalSample } from "./toxicologicalSample.interface";
export interface IExamToxicologicalDTO {
    codigo_amostra: string;
    amostraPositiva: boolean;
    amostra: IToxicologicalSample;
}
