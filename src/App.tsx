import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import ListarCategoria from './components/categoria/listarCategoria/ListarCategoria'
import FormCategoria from './components/categoria/formCategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'

function App() {
  return (
    <>
      <BrowserRouter>
        
        <div className='min-h-[84.7dvh]'>
          <Routes>
            <Route path="/" element={<Home />} />     
            <Route path="/home" element={<Home />} />     
            <Route path="/sobre" element={<Sobre />} />
            
            <Route path="/viagens" element={<h1>a</h1>} />
            <Route path="/cadastrarviagens" element={<h1>a</h1>} />
            <Route path="/editarviagens" element={<h1>a</h1>} />
            <Route path="/cancelar" element={<h1>a</h1>} />
            <Route path="/viagens/:id" element={<h1>a</h1>} />

            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarcategorias/:id" element={<FormCategoria />} />
            <Route path="/categoria/:id" element={<h1>a</h1>} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </>
  )

}

export default App;
