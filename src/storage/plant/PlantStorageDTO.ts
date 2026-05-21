import { IndicacaoStorageDTO } from "../indicacao/indicacaoStorageDTO";

export type PlantStorageDTO = {
    id: string;
    //id: string;
    namePop: string;
    nameSci: string;
    about?: string;
    tipo: string;
    family: string;
    origin?: string;
    idIndicacao: string[];
    benefits?: string[];
    properties: string[];
    contraindications: string[];
    part: string[];
    naoRecomendada: string[];
    regiao?: string[];
    image: string | null;
    formaUso: string[];
    comercializada: boolean;
    clima?: string;
    solo?: string;
    estudo: string;
    referencia: string;
    vitaminas?: string[];
    minerais?: string[];
    outros?: string[];

}