import { useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { buscar, buscarCategoria } from "../../../services/Service"
import LinhaCategoria from "../linhaCategoria/LinhaCategoria"
import { Link } from "react-router"
import { MagnifyingGlass } from "@phosphor-icons/react"


function ListarCategoria() {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [filtro, setFiltro] = useState('');

    async function buscarCategorias() {
        try{
            await buscar('/categorias', setCategorias)
        }catch(error:any){
            console.log("Erro ao buscar categorias")
        }
    }

    async function buscarPorNome(filtro: string) {
        try {
            await buscarCategoria(`/categorias/categoria/${filtro}`,setCategorias);
        } catch (error: any) {
            console.log("Erro ao filtrar por categoria");
        }
    }

    function limparFiltro(){
        setFiltro("")
    }

    useEffect(() =>{
        buscarCategorias()
    },[])


    return (
        <div className="flex flex-row h-full">
            <div className="flex flex-col justify-start items-start w-72 m-1 p-4 rounded-lg bg-slate-950 text-white">
                <h2 className="text-2xl font-semibold mb-4">Filtrar por categoria:</h2>
                <div className="flex flex-col gap-1 w-full">
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md" onClick={()=>{buscarCategorias(); limparFiltro();}}>Todos</p>
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md" onClick={()=>{buscarPorNome("Carro popular"); limparFiltro();}}>Carro Popular</p>
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md" onClick={()=>{buscarPorNome("Mini Van"); limparFiltro();}}>Mini Van</p>
                    <p className="cursor-pointer hover:bg-slate-800
                                p-2 rounded-md" onClick={()=>{buscarPorNome("Moto"); limparFiltro();}}>Moto</p>
                </div>
            </div>
            <div className="p-2 w-full ml-4">
                <div className="flex pb-1" >
                    <form className="flex flex-row overflow-hidden rounded-2xl max-h-10 w-full 
                                    border border-gray-400 bg-gray-200 mr-1"
                                        onClick={(e) => {e.preventDefault();
                                        buscarPorNome(filtro); 
                                    }}>
                        <input 
                            type="text"
                            name="filtro"
                            placeholder="Pesquise por Categoria" 
                            className="border-r border-gray-400 w-full p-2"
                            value={filtro} // O valor do input é controlado pelo estado
                            onChange={(e) => setFiltro(e.target.value)} 
                        />
                        <div className="flex justify-center w-10 m-1 items-center">
                            <button type="submit">
                                <MagnifyingGlass size={32} className="opacity-60 hover:scale-110"/>
                            </button>
                        </div>
                    </form>
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