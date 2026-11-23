import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Participe from './pages/Participe'
import Projetos from './pages/Projetos'
import ProjetoDetalhe from './pages/ProjetoDetalhe'
import Programacao from './pages/Programacao'
import Oficinas from './pages/Oficinas'
import OficinaDetalhe from './pages/OficinaDetalhe'
import Mapa from './pages/Mapa'
import Awards from './pages/Awards'
import Noticias from './pages/Noticias'
import NoticiaDetalhe from './pages/NoticiaDetalhe'
import Faq from './pages/Faq'
import EmBreve from './pages/EmBreve'
import NaoEncontrada from './pages/NaoEncontrada'

// ao trocar de página, volta para o topo
const TITULOS = {
  sobre: 'Sobre',
  participe: 'Participe',
  projetos: 'Projetos',
  programacao: 'Programação',
  oficinas: 'Oficinas',
  mapa: 'Mapa',
  awards: 'CEJLL Awards',
  noticias: 'Notícias',
  faq: 'Perguntas frequentes',
}

function tituloDaPagina(caminho) {
  const t = TITULOS[caminho.split('/')[1]]
  return t ? `${t} | CEJLL Fest` : 'CEJLL Fest — evento feito de alunos para alunos'
}

function RolarParaOTopo() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = tituloDaPagina(pathname)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <RolarParaOTopo />
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/participe" element={<Participe />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/oficinas" element={<Oficinas />} />
          <Route path="/oficinas/:id" element={<OficinaDetalhe />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
