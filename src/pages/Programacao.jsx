import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DIAS, CATEGORIAS_PROG, ATIVIDADES } from '../data/programacao'
import { OFICINAS } from '../data/oficinas'
import { useFavoritos } from '../hooks/useFavoritos'
import { useAgora } from '../hooks/useAgora'
import { andamento } from '../utils/andamento'
import { normalizar } from '../utils/normalizar'
import './Programacao.css'

const ROTULOS = {
  agora: '● Acontecendo agora',
  embreve: '◔ Em breve',
  encerrada: '✕ Encerrada',
}

// locais que existem na programação, sem repetir e em ordem alfabética
const LOCAIS = [...new Set(ATIVIDADES.map((a) => a.local).filter(Boolean))].sort((a, b) =>
  a.localeCompare(b, 'pt-BR'),
)

const formatarDia = (data) =>
  new Date(data + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })

export default function Programacao() {
  const [dia, setDia] = useState(DIAS[0].id)
  const [categoria, setCategoria] = useState('Todas')
  const [local, setLocal] = useState('Todos')
  const [busca, setBusca] = useState('')
  const [soFavoritas, setSoFavoritas] = useState(false)
  const { favoritos, alternar } = useFavoritos()
  const agora = useAgora()

  const diaAtual = DIAS.find((d) => d.id === dia)

  const visiveis = ATIVIDADES.filter((a) => a.dia === dia)
    .filter((a) => categoria === 'Todas' || a.categoria === categoria)
    .filter((a) => local === 'Todos' || a.local === local)
    .filter((a) => !soFavoritas || favoritos.includes(a.id))
    .filter((a) => normalizar(a.nome).includes(normalizar(busca)))
    .sort((a, b) => a.inicio.localeCompare(b.inicio))

  const limpar = () => {
    setCategoria('Todas')
    setLocal('Todos')
    setBusca('')
    setSoFavoritas(false)
  }

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Programação</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">
            Confira a programação do CEJLL Fest e descubra tudo o que está preparado para cada dia
            do evento.
          </p>

          <div className="prog-topo">
            {DIAS.length > 1 && (
              <div className="dias" role="group" aria-label="Escolher o dia">
                {DIAS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    className={d.id === dia ? 'dia ativo' : 'dia'}
                    aria-pressed={d.id === dia}
                    onClick={() => setDia(d.id)}
                  >
                    {d.rotulo}
                    {d.data && ` · ${formatarDia(d.data)}`}
                  </button>
                ))}
              </div>
            )}

            <div className="busca">
              <label className="visually-hidden" htmlFor="busca-atividade">
                Buscar atividade pelo nome
              </label>
              <input
                id="busca-atividade"
                type="search"
                placeholder="Buscar atividade pelo nome"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="filtros" role="group" aria-label="Filtrar por categoria">
              {['Todas', ...CATEGORIAS_PROG].map((c) => (
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
              <button
                type="button"
                className={soFavoritas ? 'filtro ativo' : 'filtro'}
                aria-pressed={soFavoritas}
                onClick={() => setSoFavoritas(!soFavoritas)}
              >
                ★ Minha agenda ({favoritos.length})
              </button>
            </div>

            {LOCAIS.length > 0 && (
              <div className="prog-local">
                <label htmlFor="filtro-local">Local</label>
                <select id="filtro-local" value={local} onChange={(e) => setLocal(e.target.value)}>
                  <option value="Todos">Todos os locais</option>
                  {LOCAIS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <p className="filtro-resultado" aria-live="polite">
            {visiveis.length} {visiveis.length === 1 ? 'atividade' : 'atividades'}
          </p>

          {visiveis.length === 0 ? (
            <div className="prog-vazio">
              <p>Nenhuma atividade encontrada para esse dia ou filtro. Tente outra opção.</p>
              <button type="button" className="btn btn-outline" onClick={limpar}>
                Limpar filtros
              </button>
            </div>
          ) : (
            <ul className="prog-lista">
              {visiveis.map((a) => {
                const favorita = favoritos.includes(a.id)
                const estado = andamento(a, diaAtual, agora)
                const oficina = OFICINAS.find((o) => o.programacaoId === a.id)

                return (
                  <li key={a.id} className={estado ? `atividade is-${estado}` : 'atividade'}>
                    <div className="atv-hora">
                      <strong>{a.inicio}</strong>
                      <span>até {a.fim}</span>
                    </div>

                    <div>
                      {a.exemplo && <span className="tag">Exemplo</span>}
                      {estado && <span className={`estado estado-${estado}`}>{ROTULOS[estado]}</span>}
                      <h3>{a.nome}</h3>
                      <ul className="atv-meta">
                        <li>{a.categoria}</li>
                        {a.local && (
                          <li>
                            Local:{' '}
                            <Link to={`/mapa?local=${encodeURIComponent(a.local)}`}>
                              {a.local}
                              <span className="visually-hidden"> (ver no mapa)</span>
                            </Link>
                          </li>
                        )}
                        {a.responsavel && <li>{a.responsavel}</li>}
                      </ul>
                      <details>
                        <summary>Ver detalhes</summary>
                        <p>{a.descricao}</p>
                        {oficina && (
                          <p>
                            <Link to={`/oficinas/${oficina.id}`}>Ver a página da atividade</Link>
                          </p>
                        )}
                      </details>
                    </div>

                    <button
                      type="button"
                      className="atv-fav"
                      aria-pressed={favorita}
                      onClick={() => alternar(a.id)}
                    >
                      <span aria-hidden="true">{favorita ? '★' : '☆'}</span> Favoritar
                      <span className="visually-hidden"> {a.nome}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
