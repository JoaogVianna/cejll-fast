import { useState } from 'react'
import Card from '../components/Card'
import { NOTICIAS } from '../data/noticias'
import { formatarData } from '../utils/formatarData'

// "Todas" + cada categoria que existe nos dados (sem repetir)
const CATEGORIAS = ['Todas', ...new Set(NOTICIAS.map((n) => n.categoria))]

export default function Noticias() {
  const [categoria, setCategoria] = useState('Todas')

  const visiveis =
    categoria === 'Todas' ? NOTICIAS : NOTICIAS.filter((n) => n.categoria === categoria)

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Notícias e avisos</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">
            Fique por dentro dos comunicados da organização, das novidades do evento e das
            mudanças na programação.
          </p>

          <div className="filtros" role="group" aria-label="Filtrar por categoria">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                type="button"
                className={c === categoria ? 'filtro ativo' : 'filtro'}
                aria-pressed={c === categoria}
                onClick={() => setCategoria(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="filtro-resultado" aria-live="polite">
            {visiveis.length} {visiveis.length === 1 ? 'notícia' : 'notícias'}
          </p>

          <div className="card-grid">
            {visiveis.map((n) => (
              <Card
                key={n.id}
                media={n.categoria}
                variante={n.variante}
                titulo={n.titulo}
                texto={n.texto}
                exemplo={n.exemplo}
                meta={`${formatarData(n.data)} · ${n.categoria}`}
                link={{ para: `/noticias/${n.id}`, rotulo: 'Ler notícia' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
