import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Viagem {
  id: number;
  velocidade: number;
  tempoViagem: number;
  distancia: number;
  tipo: string;
  destino: string;
  categoria: Categoria;
  usuario: Usuario;
}