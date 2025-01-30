import { PencilSimple } from '@phosphor-icons/react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import './ModalCategoria.css'
import FormCategoria from '../formCategoria/FormCategoria';

function ModalCategoria() {
    return (
        <Popup
            trigger={
                <button>
                    <PencilSimple size={32} className="hover:opacity-60 hover:size-8.5" />
                </button>
                // <div className="flex justify-center cursor-pointer">
                //     <PencilSimple size={32} className="hover:opacity-60 hover:size-8.5" />
                // </div>
            }
        >
            <FormCategoria/>
        </Popup>
    )
}

export default ModalCategoria