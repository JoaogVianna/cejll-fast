import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { DIAS } from '../data/programacao'
import { OFICINAS } from '../data/oficinas'
import { ESPACOS, PLANTA } from '../data/mapa'
import { useAgora } from '../hooks/useAgora'
import { momentoAgora, classificar, atividadesDoEspaco, statusDoEspaco } from '../utils/momento'
import './Mapa.css'

const ZOOMS = [1, 1.5, 2, 3]

const ROTULOS = {
  agora: 'Em andamento',
  proxima: 'Próximas atividades',
  sem: 'Sem atividades',
}

// quebra o nome em duas linhas, no espaço mais perto do meio
function quebrar(nome) {
  if (nome.length <= 14) return [nome]
  const meio = nome.length / 2
  let melhor = -1
  for (let i = 0; i < nome.length; i++) {
    if (nome[i] === ' ' && (melhor === -1 || Math.abs(i - meio) < Math.abs(melhor - meio))) {
      melhor = i
    }
  }
  return melhor === -1 ? [nome] : [nome.slice(0, melhor), nome.slice(melhor + 1)]
}

export default function Mapa() {
  // quando a pessoa vem da Programação, o endereço traz ?local=Pátio
  const [params] = useSearchParams()
  const localDoEndereco = params.get('local')

  const [selecionado, setSelecionado] = useState(
    () => ESPACOS.find((e) => e.nome === localDoEndereco)?.id ?? null,
  )
  const [modo, setModo] = useState('agora') // 'agora' ou 'escolher'
  const [diaSel, setDiaSel] = useState(DIAS[0].id)
  const [horaSel, setHoraSel] = useState('10:00')
  const [zoomIdx, setZoomIdx] = useState(0)
  const agora = useAgora()

  // o "momento" que o mapa está mostrando
  let momento = null
  if (modo === 'agora') momento = momentoAgora(agora)
  else if (horaSel) momento = { diaId: diaSel, hora: horaSel }

  const espaco = ESPACOS.find((e) => e.id === selecionado)

  const escolherHorario = () => {
    const m = momentoAgora(agora)
    if (m) {
      setDiaSel(m.diaId)
      setHoraSel(m.hora)
    }
    setModo('escolher')
  }

  // conteúdo do painel
  const atividades = espaco && momento ? atividadesDoEspaco(espaco, momento.diaId) : []
  const emAndamento = momento ? atividades.filter((a) => classificar(a, momento.hora) === 'agora') : []
  const proximas = momento ? atividades.filter((a) => classificar(a, momento.hora) === 'proxima') : []
  const livres = espaco ? OFICINAS.filter((o) => o.livre && o.local === espaco.nome) : []

  const diaDoMomento = momento ? DIAS.find((d) => d.id === momento.diaId) : null

  const teclado = (id) => (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault()
      setSelecionado(id)
    }
  }

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Mapa interativo</h1>
          <p className="mapa-intro">Explore o evento!</p>
          <p className="mapa-intro-texto">
            Veja o que está acontecendo em cada espaço do CEJLL Fest e descubra onde encontrar as
            oficinas, atividades e apresentações.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {/* escolher o momento */}
          <div className="mapa-controles">
            <div className="mapa-momento" role="group" aria-label="Escolher o momento do mapa">
              <button
                type="button"
                className={modo === 'agora' ? 'filtro ativo' : 'filtro'}
                aria-pressed={modo === 'agora'}
                onClick={() => setModo('agora')}
              >
                Agora
              </button>
              <button
                type="button"
                className={modo === 'escolher' ? 'filtro ativo' : 'filtro'}
                aria-pressed={modo === 'escolher'}
                onClick={escolherHorario}
              >
                Escolher horário
              </button>
            </div>

            {modo === 'escolher' && (
              <div className="mapa-campos">
                <div className="mapa-campo">
                  <label htmlFor="mapa-dia">Dia</label>
                  <select id="mapa-dia" value={diaSel} onChange={(e) => setDiaSel(e.target.value)}>
                    {DIAS.map((d) => (
                      <option key={d.id} value={d.id}>{d.rotulo}</option>
                    ))}
                  </select>
                </div>
                <div className="mapa-campo">
                  <label htmlFor="mapa-hora">Horário</label>
                  <input
                    id="mapa-hora"
                    type="time"
                    value={horaSel}
                    onChange={(e) => setHoraSel(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="mapa-zoom" role="group" aria-label="Ampliar o mapa">
              <button
                type="button"
                className="filtro"
                onClick={() => setZoomIdx((z) => Math.max(0, z - 1))}
                disabled={zoomIdx === 0}
              >
                Reduzir −
              </button>
              <button
                type="button"
                className="filtro"
                onClick={() => setZoomIdx((z) => Math.min(ZOOMS.length - 1, z + 1))}
                disabled={zoomIdx === ZOOMS.length - 1}
              >
                Ampliar +
              </button>
              <button type="button" className="filtro" onClick={() => setZoomIdx(0)}>
                Restaurar
              </button>
            </div>
          </div>

          <p className="mapa-situacao" aria-live="polite">
            {momento
              ? modo === 'agora'
                ? `Mostrando agora (${diaDoMomento.rotulo}, ${momento.hora}).`
                : `Mostrando ${diaDoMomento.rotulo} às ${momento.hora}.`
              : modo === 'agora'
                ? 'No momento não há nenhum dia do evento em andamento. Escolha um dia e horário para consultar a programação.'
                : 'Escolha um horário para consultar a programação.'}
          </p>

          <div className="mapa-layout">
            <div>
              {PLANTA.exemplo && <span className="tag">Mapa esquemático de exemplo</span>}

              {/* a planta: arraste para mover; use os botões para ampliar */}
              <div className="mapa-scroll" tabIndex={0} aria-label="Planta do evento, role para mover">
                <svg
                  className={PLANTA.imagem ? 'mapa-svg com-imagem' : 'mapa-svg'}
                  viewBox={`0 0 ${PLANTA.largura} ${PLANTA.altura}`}
                  style={{ width: `${ZOOMS[zoomIdx] * 100}%` }}
                  role="group"
                  aria-label="Planta do evento com os espaços"
                >
                  <rect className="mapa-fundo" width={PLANTA.largura} height={PLANTA.altura} />
                  {PLANTA.imagem && (
                    <image
                      href={PLANTA.imagem}
                      width={PLANTA.largura}
                      height={PLANTA.altura}
                      preserveAspectRatio="xMidYMid meet"
                    />
                  )}

                  {ESPACOS.map((e) => {
                    const status = momento ? statusDoEspaco(e, momento) : 'sem'
                    const sel = e.id === selecionado
                    const linhas = quebrar(e.nome)
                    const y0 = e.y + e.h / 2 - (linhas.length - 1) * 14

                    return (
                      <g
                        key={e.id}
                        className={`espaco espaco-${status}`}
                        role="button"
                        tabIndex={0}
                        aria-pressed={sel}
                        aria-label={`${e.nome}: ${ROTULOS[status]}`}
                        onClick={() => setSelecionado(e.id)}
                        onKeyDown={teclado(e.id)}
                      >
                        {sel && (
                          <rect
                            className="espaco-anel"
                            x={e.x - 8}
                            y={e.y - 8}
                            width={e.w + 16}
                            height={e.h + 16}
                            rx="20"
                          />
                        )}
                        <rect className="base" x={e.x} y={e.y} width={e.w} height={e.h} rx="14" />
                        {linhas.map((linha, i) => (
                          <text
                            key={i}
                            className="nome"
                            x={e.x + e.w / 2}
                            y={y0 + i * 28}
                            textAnchor="middle"
                          >
                            {linha}
                          </text>
                        ))}
                        <text className="estado" x={e.x + e.w / 2} y={e.y + e.h - 20} textAnchor="middle">
                          {ROTULOS[status]}
                        </text>
                      </g>
                    )
                  })}
                </svg>
              </div>

              <ul className="mapa-legenda">
                <li><span className="amostra amostra-agora" aria-hidden="true" /> Em andamento</li>
                <li><span className="amostra amostra-proxima" aria-hidden="true" /> Próximas atividades</li>
                <li><span className="amostra amostra-sem" aria-hidden="true" /> Sem atividades</li>
              </ul>
            </div>

            {/* painel do espaço escolhido */}
            <aside className="mapa-painel" aria-live="polite">
              {!espaco ? (
                <p>Toque ou clique em um espaço do mapa para ver o que está acontecendo ali.</p>
              ) : (
                <>
                  <h2>{espaco.nome}</h2>

                  {!momento ? (
                    <p>Escolha um dia e horário para consultar a programação deste espaço.</p>
                  ) : (
                    <>
                      {emAndamento.length > 0 ? (
                        <>
                          <h3>Acontecendo agora</h3>
                          <ul className="mapa-lista">
                            {emAndamento.map((a) => (
                              <li key={a.id}>
                                {a.exemplo && <span className="tag">Exemplo</span>}
                                <strong>{a.nome}</strong>
                                <span>{a.inicio} às {a.fim}</span>
                                {a.responsavel && <span>Responsável: {a.responsavel}</span>}
                                <p>{a.descricao}</p>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <p>
                          {atividades.length === 0 && livres.length === 0
                            ? 'Este espaço não tem atividades programadas.'
                            : 'Não há atividades neste momento.'}
                        </p>
                      )}

                      {proximas.length > 0 && (
                        <>
                          <h3>Próximas atividades</h3>
                          <ul className="mapa-lista">
                            {proximas.map((a) => (
                              <li key={a.id}>
                                {a.exemplo && <span className="tag">Exemplo</span>}
                                <strong>{a.nome}</strong>
                                <span>{a.inicio} às {a.fim}</span>
                                {a.responsavel && <span>Responsável: {a.responsavel}</span>}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </>
                  )}

                  {livres.length > 0 && (
                    <>
                      <h3>Disponível durante o evento</h3>
                      <ul className="mapa-lista">
                        {livres.map((o) => (
                          <li key={o.id}>
                            {o.exemplo && <span className="tag">Exemplo</span>}
                            <strong>{o.nome}</strong>
                            <Link to={`/oficinas/${o.id}`}>Ver a página da atividade</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
