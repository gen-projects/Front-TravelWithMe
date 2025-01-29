import { PencilSimple, TrashSimple } from "@phosphor-icons/react"
import Categoria from "../../../models/Categoria"

interface LinhaCategoriaProps{
    categoria: Categoria
}

function LinhaCategoria({categoria}: LinhaCategoriaProps) {    
    return (
    <tr className=" h-9 border-1 border-black text-center">
        <td className="border-1">{categoria.id}</td>
        <td className="border-1">{categoria.categoria}</td>
        <td className="border-1">{categoria.descricao}</td>
        <td className="border-1">
            <div className="flex justify-center">
                <PencilSimple size={32} className='hover:opacity-60 hover:size-8.5' />
            </div>
        </td>
        <td className="border-1">
            <div className="flex justify-center">
                <TrashSimple size={32} className='hover:opacity-60 hover:size-8.5' />
            </div>
        </td>   
    </tr>
    )
}

export default LinhaCategoria