import { useState } from 'react'
import NoticiaCard from '../components/NoticiaCard'
import { NOTICIAS, CATEGORIAS_NOTICIA } from '../data/noticias'
import { ordenarNoticias } from '../utils/ordenarNoticias'
import './Noticias.css'

const VARIANTES = ['pink', 'navy', 'gray']
const POR_PAGINA = 6

export default function Noticias() {
  const [categoria, setCategoria] = useState('Todas')
  const [limite, setLimite] = useState(POR_PAGINA)

  const ordenadas = ordenarNoticias(NOTICIAS)
  const destaques = ordenadas.filter((n) => n.destaque).slice(0, 2)
  const filtradas = ordenadas.filter((n) => categoria === 'Todas' || n.categoria === categoria)
  const visiveis = filtradas.slice(0, limite)

  const escolher = (c) => {
    setCategoria(c)
    setLimite(POR_PAGINA) // ao trocar de categoria, volta a mostrar só as primeiras
  }

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Notícias</h1>
          <p className="noticias-intro">
            Acompanhe as novidades, os preparativos e os principais acontecimentos do CEJLL Fest.
          </p>
        </div>
      </section>

      {destaques.length > 0 && (
        <section className="section" aria-labelledby="destaques-noticias-titulo">
          <div className="wrap">
            <h2 className="section-title" id="destaques-noticias-titulo">Em destaque</h2>
            <div className="noticias-destaques">
              {destaques.map((n, i) => (
                <NoticiaCard key={n.id} noticia={n} grande variante={VARIANTES[i % VARIANTES.length]} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-mist" aria-labelledby="todas-titulo">
        <div className="wrap">
          <h2 className="section-title" id="todas-titulo">Todas as publicações</h2>

          <div className="filtros" role="group" aria-label="Filtrar por categoria">
            {['Todas', ...CATEGORIAS_NOTICIA].map((c) => (
              <button
                key={c}
                type="button"
                className={c === categoria ? 'filtro ativo' : 'filtro'}
                aria-pressed={c === categoria}
                onClick={() => escolher(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="filtro-resultado" aria-live="polite">
            {filtradas.length === 0
              ? '0 publicações'
              : `Mostrando ${visiveis.length} de ${filtradas.length} ${filtradas.length === 1 ? 'publicação' : 'publicações'}`}
          </p>

          {filtradas.length === 0 ? (
            <p className="noticias-vazio">Não há notícias disponíveis nesta categoria.</p>
          ) : (
            <div className="card-grid noticias-grid">
              {visiveis.map((n) => (
                <NoticiaCard
                  key={n.id}
                  noticia={n}
                  variante={VARIANTES[NOTICIAS.indexOf(n) % VARIANTES.length]}
                />
              ))}
            </div>
          )}

          {visiveis.length < filtradas.length && (
            <p className="noticias-mais">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setLimite((l) => l + POR_PAGINA)}
              >
                Carregar mais
              </button>
            </p>
          )}
        </div>
      </section>
    </>
  )
}
