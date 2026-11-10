import { useState } from 'react'
import { DIAS, CATEGORIAS_PROG, ATIVIDADES } from '../data/programacao'
import { useFavoritos } from '../hooks/useFavoritos'
import './Programacao.css'

// tira acentos e maiúsculas para a busca achar "oficina" em "Oficína"
const normalizar = (texto) =>
  texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const formatarDia = (data) =>
  new Date(data + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })

export default function Programacao() {
  const [dia, setDia] = useState(DIAS[0].id)
  const [categoria, setCategoria] = useState('Todas')
  const [busca, setBusca] = useState('')
  const [soFavoritas, setSoFavoritas] = useState(false)
  const { favoritos, alternar } = useFavoritos()

  const visiveis = ATIVIDADES.filter((a) => a.dia === dia)
    .filter((a) => categoria === 'Todas' || a.categoria === categoria)
    .filter((a) => !soFavoritas || favoritos.includes(a.id))
    .filter((a) => normalizar(a.nome).includes(normalizar(busca)))
    .sort((a, b) => a.inicio.localeCompare(b.inicio))

  const limpar = () => {
    setCategoria('Todas')
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
            Veja os horários de tudo o que acontece no CEJLL Fest e marque as atividades que
            você não quer perder.
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
          </div>

          <p className="filtro-resultado" aria-live="polite">
            {visiveis.length} {visiveis.length === 1 ? 'atividade' : 'atividades'}
          </p>

          {visiveis.length === 0 ? (
            <div className="prog-vazio">
              <p>Nenhuma atividade encontrada. Tente outro filtro ou outra busca.</p>
              <button type="button" className="btn btn-outline" onClick={limpar}>
                Limpar filtros
              </button>
            </div>
          ) : (
            <ul className="prog-lista">
              {visiveis.map((a) => {
                const favorita = favoritos.includes(a.id)
                return (
                  <li key={a.id} className="atividade">
                    <div className="atv-hora">
                      <strong>{a.inicio}</strong>
                      <span>até {a.fim}</span>
                    </div>

                    <div>
                      {a.exemplo && <span className="tag">Exemplo</span>}
                      <h3>{a.nome}</h3>
                      <ul className="atv-meta">
                        <li>{a.categoria}</li>
                        <li>{a.local}</li>
                        <li>{a.responsavel}</li>
                      </ul>
                      <details>
                        <summary>Ver detalhes</summary>
                        <p>{a.descricao}</p>
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
