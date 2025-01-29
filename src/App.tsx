import { BrowserRouter, Route, Routes } from 'react-router'
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
            <Route path="/cadastrarviagens" element={<h1>a</h1>} />
            <Route path="/editarviagens" element={<h1>a</h1>} />
            <Route path="/cancelar" element={<h1>a</h1>} />
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
