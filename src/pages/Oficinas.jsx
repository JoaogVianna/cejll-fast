import { useState } from 'react'
import { Link } from 'react-router-dom'
import OficinaCard from '../components/OficinaCard'
import { OFICINAS, CATEGORIAS_OFICINA } from '../data/oficinas'
import { normalizar } from '../utils/normalizar'
import './Oficinas.css'

const VARIANTES = ['navy', 'pink', 'gray']

export default function Oficinas() {
  const [categoria, setCategoria] = useState('Todas')
  const [busca, setBusca] = useState('')

  // os dois filtros trabalham juntos: categoria E busca
  const visiveis = OFICINAS.filter((o) => categoria === 'Todas' || o.categoria === categoria).filter(
    (o) => normalizar(o.nome).includes(normalizar(busca)),
  )

  const limpar = () => {
    setCategoria('Todas')
    setBusca('')
  }

  return (
    <>
      <section className="page-banner">
        <div className="wrap of-hero">
          <div>
            <h1>Oficinas e atividades</h1>
            <p className="of-hero-destaque">Aprenda, experimente e participe!</p>
            <p>
              Conheça as oficinas, experiências e atividades preparadas pelos estudantes para o
              CEJLL Fest.
            </p>
          </div>
          <div className="of-hero-img" aria-hidden="true">Imagem de destaque</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="busca">
            <label className="visually-hidden" htmlFor="busca-oficina">
              Buscar atividade pelo nome
            </label>
            <input
              id="busca-oficina"
              type="search"
              placeholder="Buscar atividade pelo nome"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="filtros" role="group" aria-label="Filtrar por categoria">
            {['Todas', ...CATEGORIAS_OFICINA].map((c) => (
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
            {visiveis.length} {visiveis.length === 1 ? 'atividade' : 'atividades'}
          </p>

          {visiveis.length === 0 ? (
            <div className="prog-vazio">
              <p>Nenhuma atividade encontrada. Tente outra categoria ou outra busca.</p>
              <button type="button" className="btn btn-outline" onClick={limpar}>
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="card-grid of-grid">
              {visiveis.map((o, i) => (
                <OficinaCard key={o.id} oficina={o} variante={VARIANTES[i % VARIANTES.length]} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="organizar-titulo">
        <div className="wrap">
          <div className="of-cta">
            <h2 id="organizar-titulo">Quer organizar uma atividade?</h2>
            <p>
              Tem uma ideia de oficina, experiência ou atividade para compartilhar? Participe da
              organização do CEJLL Fest!
            </p>
            <Link className="btn" to="/participe#oficinas">Inscrever uma atividade</Link>
          </div>
        </div>
      </section>
    </>
  )
}
