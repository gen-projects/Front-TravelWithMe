import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import LinhaCategoria from "../linhaCategoria/LinhaCategoria"


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
                <div className="flex flex-col gap-4 w-full">
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