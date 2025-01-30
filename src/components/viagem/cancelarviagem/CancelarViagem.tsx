import { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Viagem from "../../../models/Viagem";
import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar} from "../../../services/Service";

function CancelarViagem(){

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viagem, setViagem] = useState<Viagem>({} as Viagem)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem)
        } catch (error: any) {
            alert('Viagem não encontrada')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function cancelarViagem() {
        setIsLoading(true)

        try {
            await deletar(`/viagens/${id}`)
        } catch (error: any) {
            alert('Erro ao deletar viagem')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/viagens")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Viagem</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a viagem a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-slate-950 text-white font-bold text-2xl text-center'>
                    Viagem
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{viagem.destino}</p>
                    <p>{viagem.tipo}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-slate-800 
                        hover:bg-slate-600 flex items-center justify-center'
                        onClick={cancelarViagem}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CancelarViagem;