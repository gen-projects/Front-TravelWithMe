import { BrowserRouter, Route, Routes } from 'react-router'
import FormViagem from './components/viagem/formviagem/FormViagem.tsx'
import CancelarViagem from './components/viagem/cancelarviagem/CancelarViagem.tsx'
import './App.css'
import Viagens from './pages/viagens/Viagens'

import ListarCategoria from './components/categoria/listarCategoria/ListarCategoria'
import FormCategoria from './components/categoria/formCategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[84.7dvh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            
            <Route path="/viagens" element={<Viagens/>} />
            <Route path="/cadastrarviagens" element={<FormViagem />} />
            <Route path="/editarviagens/:id" element={<FormViagem/>} />
            <Route path="/cancelar/:id" element={<CancelarViagem />} />
            <Route path="/viagens/:id" element={<h1>a</h1>} />

            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarcategorias" element={<FormCategoria />} />
            <Route path="/editarcategorias/:id" element={<FormCategoria />} />
            <Route path="/categoria/:id" element={<h1>a</h1>} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;