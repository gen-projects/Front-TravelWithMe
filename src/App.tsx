import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
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

            <Route path="/viagens" element={<h1>Viagens</h1>} />
            <Route path="/cadastrarviagens" element={<h1>Cadastrar Viagens</h1>} />
            <Route path="/editarviagens" element={<h1>Editar Viagens</h1>} />
            <Route path="/cancelar" element={<h1>Cancelar</h1>} />
            <Route path="/viagens/:id" element={<h1>Detalhes da Viagem</h1>} />

            <Route path="/categorias" element={<h1>Categorias</h1>} />
            <Route path="/cadastrarcategorias" element={<h1>Cadastrar Categorias</h1>} />
            <Route path="/editarcategorias" element={<h1>Editar Categorias</h1>} />
            <Route path="/categoria/:id" element={<h1>Detalhes da Categoria</h1>} />
            <Route path="/deletarcategoria" element={<h1>Deletar Categoria</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;