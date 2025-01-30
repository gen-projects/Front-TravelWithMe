import {PencilSimple, TrashSimple } from "@phosphor-icons/react"
import Categoria from "../../../models/Categoria"
import { Link } from "react-router"

interface LinhaCategoriaProps{
    categoria: Categoria
}

function LinhaCategoria({categoria}: LinhaCategoriaProps) {    
    return (
    <tr className=" h-9 border-black text-center">
        <td className="border-b border-gray-300">{categoria.id}</td>
        <td className="border-b border-gray-300">{categoria.categoria}</td>
        <td className="border-b border-gray-300">{categoria.descricao}</td>

        <td className="border-b border-gray-300">
            <div className="flex justify-center">
                <Link to={`/editarcategorias/${categoria.id}`}>
                    <PencilSimple size={32} className="hover:opacity-60 hover:size-8.5" />
                </Link>
            </div>
        </td>

        <td className="border-b border-gray-300">
            <div className="flex justify-center">
                <Link to={`/deletarcategoria/${categoria.id}`}>
                    <TrashSimple size={32} className='hover:opacity-60 hover:size-8.5' />
                </Link>
            </div>
        </td>   
    </tr>
    )
}

export default LinhaCategoria