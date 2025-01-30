import Viagem from "./Viagem";

export default interface Categoria {
    id: number;
    categoria: string;
    descricao: string;
    viagem?: Viagem | null;
}