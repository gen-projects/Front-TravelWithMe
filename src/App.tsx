import { BrowserRouter, Route, Routes } from 'react-router'
import FormViagem from './components/viagem/formviagem/FormViagem.tsx'
import CancelarViagem from './components/viagem/cancelarviagem/CancelarViagem.tsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        
        <div className='min-h-[84.7dvh]'>
          <Routes>
            <Route path="/" element={<h1>a</h1>} />     
            <Route path="/home" element={<h1>a</h1>} />     
            <Route path="/sobre" element={<h1>a</h1>} />
            
            <Route path="/viagens" element={<h1>a</h1>} />
            <Route path="/cadastrarviagens" element={<FormViagem />} />
            <Route path="/editarviagens/:id" element={<FormViagem/>} />
            <Route path="/cancelar/:id" element={<CancelarViagem />} />
            <Route path="/viagens/:id" element={<h1>a</h1>} />

            <Route path="/categorias" element={<h1>a</h1>} />
            <Route path="/cadastrarcategorias" element={<h1>a</h1>} />
            <Route path="/editarcategorias" element={<h1>a</h1>} />
            <Route path="/categoria/:id" element={<h1>a</h1>} />
            <Route path="/deletarcategoria" element={<h1>a</h1>} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </>
  )
}

export default App
