import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"

function DeletarCategoria() {

    const navigate = useNavigate()

    const[categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const {id} = useParams<{id: string}>()

    function retornar(){
        navigate("/categorias")
    }

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

    async function deletarCategoria() {
        try
        {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso')
        }catch(error:any)
        {
            alert('Erro ao deletar o tema')
        }
        retornar()
    }

    return (
        <>
        <div className="w-1/3 mx-auto overflow-hidden bg-slate-950 rounded-2xl">
            <h1 className="text-4xl text-center text-white mt-4">
                Deletar Categoria
            </h1>
            <p className="font-semibold text-center  text-white mb-4">
                Você tem certeza que deseja apagar essa categoria?
            </p>
            <div className="flex flex-col text-center bg-slate-300 pt-1">
                <p className="py-2 text-3xl font-bold">
                    {categoria.categoria}
                </p>
                <p className="pb-6 text-2xl">
                    {categoria.descricao}
                </p>
            </div>
        </div>
        <div className="w-1/3 pt-1 mx-auto flex flex-row rounded-2xl overflow-hidden">
                <button className="bg-red-400 text-white font-semibold w-2/3 py-2 
                                hover:bg-red-600 hover:font-bold" onClick={retornar}>
                    Não
                </button>
                <button className="bg-slate-800 text-white font-semibold w-1/3 py-2 
                                hover:bg-slate-600 hover:font-bold" onClick={deletarCategoria}>
                    Sim
                </button>
        </div>
        </>
    )
}

export default DeletarCategoria