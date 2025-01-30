import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import LinhaCategoria from "../linhaCategoria/LinhaCategoria"
import { Link } from "react-router"


function ListarCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try{
            await buscar('/categorias', setCategorias)
        }catch(error:any){
            console.log("Erro ao buscar categorias")
        }
    }

    useEffect(() =>{
        buscarCategorias()
    },[categorias.length])


    return (
        <div className="flex flex-row h-full">
            <div className="flex flex-col justify-start items-start w-72 m-1 p-4 rounded-lg bg-slate-950 text-white">
                <h2 className="text-2xl font-semibold mb-4">Filtrar por categoria:</h2>
                <div className="flex flex-col gap-1 w-full">
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md">Todos</p>
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md">Carro Popular</p>
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md">Mini Van</p>
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md">Moto</p>
                </div>
            </div>
            <div className="p-2 w-full ml-4">
                <div className="flex justify-end pb-1">
                    <Link to ={'/cadastrarcategorias'}>
                        <button className="flex items-center gap-2 border-2 border-slate-700 bg-slate-700 rounded-2xl px-4 py-1 text-white 
                            font-semibold text-lg transition-all duration-200 ease-in-out hover:bg-slate-700/80 hover:border-slate-700/30">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
                            </svg>
                            Tema
                        </button>
                    </Link>
                </div>
                <table className=" w-full border-gray-300">
                    <thead>
                        <tr className="bg-slate-900 text-white">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Categoria</th>
                            <th className="py-2 px-4 border-b">Descrição</th>
                            <th className="py-2 px-4 border-b">Editar</th>
                            <th className="py-2 px-4 border-b">Apagar</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {categorias.map((categoria) =>{
                            return(
                                <LinhaCategoria 
                                    key={categoria.id} 
                                    categoria={categoria} 
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListarCategoria