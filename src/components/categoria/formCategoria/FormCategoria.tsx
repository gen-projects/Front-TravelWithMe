import { useNavigate, useParams } from "react-router";
import Categoria from "../../../models/Categoria";
import { ChangeEvent, useEffect, useState } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {

    const navigate = useNavigate();

    const[categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id:string) {
        try{
            await buscar(`/categorias/${id}`, setCategoria,)
        }catch(error: any){
            alert("Erro ao buscar por Id")
        }
    }

    useEffect(() => {
        if(id !== undefined){
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar(){
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if(id !== undefined){
            try{
                await atualizar(`/categorias`, categoria, setCategoria)
                alert('A Categoria foi atualizado com sucesso!')
            }catch(error: any){
                alert('Erro ao atualizar a categoria')
            }
        }else {
            try{
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('Categoria criada com sucesso')
            }catch(error: any) {
                alert('Erro ao cadastrar a Categoria')
            }

    } 
    retornar()
}

    return (
        <>
            <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="categoria">Descrição do Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        name='categoria'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.categoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Tema</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                            hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                </button>
            </form>
        </div>
        </>
    );
}

export default FormCategoria;
