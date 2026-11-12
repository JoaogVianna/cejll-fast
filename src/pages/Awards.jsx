import { Link } from 'react-router-dom'
import { PROJETOS } from '../data/projetos'
import { APRESENTACAO, CATEGORIAS_AWARDS, VOTACAO, RESULTADO } from '../data/awards'
import { situacao, formatar } from '../utils/inscricao'
import '../components/FormCard.css'
import './Awards.css'

const ROTULOS_VOTACAO = {
  aberta: '● Votação aberta',
  embreve: '◔ Em breve',
  encerrada: '✕ Votação encerrada',
}

function textoVotacao(estado) {
  if (estado === 'aberta') {
    return VOTACAO.fecha ? `Vote até ${formatar(VOTACAO.fecha)}.` : 'A votação está aberta.'
  }
  if (estado === 'encerrada') return 'A votação foi encerrada.'
  return VOTACAO.abre
    ? `A votação abre em ${formatar(VOTACAO.abre)}.`
    : 'O período de votação ainda será divulgado.'
}

export default function Awards() {
  const estado = situacao(VOTACAO)

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>CEJLL Awards</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <nav className="awards-nav" aria-label="Nesta página">
            <a href="#categorias">Categorias e indicados</a>
            <a href="#votacao">Votação</a>
            <a href="#resultado">Resultado</a>
          </nav>

          <div className="awards-texto">
            <h2 className="section-title">O que é o CEJLL Awards?</h2>
            {APRESENTACAO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mist" id="categorias" aria-labelledby="categorias-titulo">
        <div className="wrap">
          <h2 className="section-title" id="categorias-titulo">Categorias e indicados</h2>
          <div className="categorias">
            {CATEGORIAS_AWARDS.map((categoria) => {
              const indicados = PROJETOS.filter((p) => p.awards === categoria)
              return (
                <article key={categoria} className="categoria">
                  <h3>{categoria}</h3>
                  {indicados.length === 0 ? (
                    <p>Indicados a definir.</p>
                  ) : (
                    <ul>
                      {indicados.map((p) => (
                        <li key={p.id}>
                          <Link to={`/projetos/${p.id}`}>{p.nome}</Link>
                          {p.exemplo && <span className="tag">Exemplo</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" id="votacao" aria-labelledby="votacao-titulo">
        <div className="wrap awards-texto">
          <h2 className="section-title" id="votacao-titulo">Votação</h2>
          <span className={`status status-${estado}`}>{ROTULOS_VOTACAO[estado]}</span>
          <p>{textoVotacao(estado)}</p>
          {estado === 'aberta' && VOTACAO.url ? (
            <a className="btn" href={VOTACAO.url} target="_blank" rel="noopener noreferrer">
              Votar
              <span className="visually-hidden"> no CEJLL Awards (abre em nova aba)</span>
            </a>
          ) : (
            <button className="btn" type="button" disabled>
              Votação não disponível
            </button>
          )}
        </div>
      </section>

      <section className="section section-mist" id="resultado" aria-labelledby="resultado-titulo">
        <div className="wrap">
          <h2 className="section-title" id="resultado-titulo">Resultado</h2>
          {RESULTADO.publicado && RESULTADO.vencedores.length > 0 ? (
            <div className="categorias">
              {RESULTADO.vencedores.map((v) => {
                const projeto = PROJETOS.find((p) => p.id === v.projetoId)
                return (
                  <article key={v.categoria} className="categoria vencedor">
                    <h3>{v.categoria}</h3>
                    <p>
                      {projeto ? (
                        <Link to={`/projetos/${projeto.id}`}>{projeto.nome}</Link>
                      ) : (
                        v.projetoId
                      )}
                    </p>
                    {v.mencao && <p>{v.mencao}</p>}
                  </article>
                )
              })}
            </div>
          ) : (
            <p className="awards-texto">
              O resultado será divulgado depois da cerimônia de encerramento, com os vencedores
              de cada categoria, os projetos premiados e as fotos da premiação.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
