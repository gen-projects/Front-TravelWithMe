import Viagem from "./Viagem";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  viagem?: Viagem| null;
}