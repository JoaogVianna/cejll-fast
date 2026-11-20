import { useState } from 'react'
import ProjetoCard from '../components/ProjetoCard'
import { PROJETOS, CATEGORIAS_PROJETO } from '../data/projetos'
import { normalizar } from '../utils/normalizar'
import './Projetos.css'

const VARIANTES = ['navy', 'pink', 'gray']

export default function Projetos() {
  const [categoria, setCategoria] = useState('Todos')
  const [busca, setBusca] = useState('')

  const termo = normalizar(busca)

  // categoria E busca (nome, resumo e descrição) trabalham juntas
  const visiveis = PROJETOS.filter((p) => categoria === 'Todos' || p.categoria === categoria).filter(
    (p) => normalizar(`${p.nome} ${p.resumo} ${p.descricao}`).includes(termo),
  )

  const limpar = () => {
    setCategoria('Todos')
    setBusca('')
  }

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Projetos e exposições</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="section-title">Explore os projetos</h2>
          <p className="lead">
            Conheça os trabalhos dos estudantes antes mesmo de visitar o estande.
          </p>

          <div className="proj-busca">
            <label className="visually-hidden" htmlFor="busca-projeto">
              Pesquisar projetos pelo nome ou por palavras da descrição
            </label>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" strokeLinecap="round" />
            </svg>
            <input
              id="busca-projeto"
              type="search"
              placeholder="Pesquisar projetos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="filtros" role="group" aria-label="Filtrar por categoria">
            {['Todos', ...CATEGORIAS_PROJETO].map((c) => (
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

          {visiveis.length === 0 ? (
            <div className="proj-vazio">
              <p>Nenhum projeto encontrado. Tente outra categoria ou outra busca.</p>
              <button type="button" className="btn btn-outline" onClick={limpar}>
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="card-grid proj-grid">
              {visiveis.map((p) => (
                <ProjetoCard
                  key={p.id}
                  projeto={p}
                  variante={VARIANTES[PROJETOS.indexOf(p) % VARIANTES.length]}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
