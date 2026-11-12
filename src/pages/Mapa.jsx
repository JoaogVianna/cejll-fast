import { useState } from 'react'
import { ESPACOS, TIPOS } from '../data/mapa'
import './Mapa.css'

const classeDoTipo = (tipo) => TIPOS.find((t) => t.nome === tipo)?.classe ?? 'mist'

export default function Mapa() {
  const [selecionado, setSelecionado] = useState(null)
  const espaco = ESPACOS.find((e) => e.id === selecionado)

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Mapa do evento</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">
            Encontre os estandes e os espaços do CEJLL Fest. Escolha um espaço no mapa ou na
            lista para ver os detalhes.
          </p>
          <p>
            <span className="tag">Exemplo</span> Este desenho é ilustrativo. A planta real será
            publicada aqui.
          </p>

          <div className="mapa-layout">
            <div>
              <svg
                className="mapa-svg"
                viewBox="0 0 400 300"
                role="img"
                aria-label="Desenho ilustrativo do evento. Use a lista de espaços para escolher um local."
              >
                {ESPACOS.map((e) => (
                  <g key={e.id} onClick={() => setSelecionado(e.id)}>
                    <rect
                      x={e.x}
                      y={e.y}
                      width={e.w}
                      height={e.h}
                      rx="8"
                      className={`mapa-espaco mapa-${classeDoTipo(e.tipo)}${
                        e.id === selecionado ? ' mapa-ativo' : ''
                      }`}
                    />
                    <text
                      x={e.x + e.w / 2}
                      y={e.y + e.h / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`mapa-rotulo mapa-texto-${classeDoTipo(e.tipo)}`}
                    >
                      {e.rotulo}
                    </text>
                  </g>
                ))}
              </svg>

              <ul className="mapa-legenda" aria-label="Legenda do mapa">
                {TIPOS.map((t) => (
                  <li key={t.nome}>
                    <span className={`mapa-amostra mapa-${t.classe}`} aria-hidden="true" />
                    {t.nome}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mapa-subtitulo">Espaços</h2>
              <div className="mapa-lista" role="group" aria-label="Escolher um espaço">
                {ESPACOS.map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    className={e.id === selecionado ? 'filtro ativo' : 'filtro'}
                    aria-pressed={e.id === selecionado}
                    onClick={() => setSelecionado(e.id === selecionado ? null : e.id)}
                  >
                    {e.nome}
                  </button>
                ))}
              </div>

              <div className="mapa-detalhe" aria-live="polite">
                {espaco ? (
                  <>
                    <h3>{espaco.nome}</h3>
                    <p className="mapa-tipo">{espaco.tipo}</p>
                    <p>{espaco.descricao}</p>
                  </>
                ) : (
                  <p>Escolha um espaço para ver os detalhes.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
