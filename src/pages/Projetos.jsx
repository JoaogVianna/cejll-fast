import { useState } from 'react'
import Card from '../components/Card'
import { PROJETOS } from '../data/projetos'
import './Projetos.css'

const VARIANTES = ['navy', 'pink', 'gray']

// "Todos" + cada categoria que existe nos dados (sem repetir)
const CATEGORIAS = ['Todos', ...new Set(PROJETOS.map((p) => p.categoria))]

export default function Projetos() {
  const [categoria, setCategoria] = useState('Todos')

  const visiveis =
    categoria === 'Todos' ? PROJETOS : PROJETOS.filter((p) => p.categoria === categoria)

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Projetos e exposições</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">
            Conheça os projetos que vão participar do CEJLL Fest antes mesmo de visitar o estande.
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
            {visiveis.length} {visiveis.length === 1 ? 'projeto' : 'projetos'}
          </p>

          <div className="card-grid">
            {visiveis.map((p, i) => (
              <Card
                key={p.id}
                media={p.categoria}
                variante={VARIANTES[i % VARIANTES.length]}
                titulo={p.nome}
                texto={p.resumo}
                exemplo={p.exemplo}
                link={{ para: `/projetos/${p.id}`, rotulo: 'Ver projeto' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
