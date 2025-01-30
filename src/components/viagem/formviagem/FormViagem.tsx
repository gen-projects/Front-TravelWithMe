import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Viagem from "../../../models/Viagem";
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";
import { buscar, atualizar, cadastrar } from "../../../services/Service";

function FormViagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, categoria: '', descricao: '', });
    const [viagem, setViagem] = useState<Viagem>({} as Viagem);

    const { id } = useParams<{ id: string }>();

    async function buscarViagemPorId(id: string) {
        try {
            await buscar(`/viagens/${id}`, setViagem)
        } catch (error: any) {
            alert('Viagem não encontrada')
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Categoria não encontrada')
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            alert('Categorias não encontradas')
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarViagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setViagem({
            ...viagem,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setViagem({
            ...viagem,
            [e.target.name]: e.target.value,
            categoria: categoria
        });
    }

    function retornar() {
        navigate('/viagens');
    }

    async function gerarNovaViagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/viagens`, viagem, setViagem);
            } catch (error: any) {
                alert('Erro ao atualizar a viagem')
            }
        } else {
            try {
                await cadastrar(`/viagens`, viagem, setViagem)
            } catch (error: any) {
                alert('Erro ao cadastrar a viagem')
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar viagem' : 'Cadastrar viagem'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaViagem}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="tipo">Tipo da Viagem</label>
                    <input
                        type="text"
                        placeholder="Tipo"
                        name="tipo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={viagem.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="destino">Destino da Viagem</label>
                    <input
                        type="text"
                        placeholder="Destino"
                        name="destino"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={viagem.destino}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="distancia">Distância prevista para a viagem</label>
                    <input
                        type="text"
                        placeholder="Distancia"
                        name="distancia"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={viagem.distancia}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="velocidade">Velocidade média prevista para a viagem</label>
                    <input
                        type="number"
                        placeholder="Velocidade"
                        name="velocidade"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={viagem.velocidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria da viagem</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma categoria</option>

                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.categoria}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-950 bg-slate-950 hover:bg-slate-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                    disabled={carregandoCategoria}
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>  
    );
}

export default FormViagem;