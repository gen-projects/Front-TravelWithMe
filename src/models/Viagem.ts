import Categoria from "./Categoria";

export default interface Viagem {
    id: number;
    velocidade: number;
    tempoViagem?: number;
    distancia: number;
    tipo: string;
    destino: string;
    categoria?: Categoria | null;
}