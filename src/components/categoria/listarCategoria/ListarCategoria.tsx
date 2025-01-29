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
        <div>
            <div className="p-4">
                <table className=" w-full border-1 border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th>ID</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Editar</th>
                            <th>Apagar</th>    
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