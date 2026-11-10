import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Participe from './pages/Participe'
import Projetos from './pages/Projetos'
import ProjetoDetalhe from './pages/ProjetoDetalhe'
import Programacao from './pages/Programacao'
import EmBreve from './pages/EmBreve'

// ao trocar de página, volta para o topo
function RolarParaOTopo() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <RolarParaOTopo />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participe" element={<Participe />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="*" element={<EmBreve />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
