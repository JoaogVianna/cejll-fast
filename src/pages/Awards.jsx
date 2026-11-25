import { Link } from 'react-router-dom'
import ProjetoCard from '../components/ProjetoCard'
import { PROJETOS } from '../data/projetos'
import { CATEGORIAS_AWARDS, CATEGORIAS_EXEMPLO, VOTACAO, RESULTADO } from '../data/awards'
import { situacaoDoPeriodo } from '../utils/situacao'
import './Awards.css'

const VARIANTES = ['navy', 'pink', 'gray']

const ROTULOS = {
  aberta: '● Votação aberta',
  embreve: '◔ Em breve',
  encerrada: '✕ Votação encerrada',
}

const dia = (iso) =>
  new Date(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })

export default function Awards() {
  // os indicados de cada categoria vêm dos projetos que declaram concorrer a ela
  const indicadosDe = (categoria) => PROJETOS.filter((p) => [].concat(p.awards || []).includes(categoria.nome))

  const estado = situacaoDoPeriodo(VOTACAO)
  const podeVotar = estado === 'aberta' && VOTACAO.url

  let periodo = 'Período de votação a definir.'
  if (estado === 'aberta') periodo = VOTACAO.fecha ? `Votação até ${dia(VOTACAO.fecha)}.` : 'Votação aberta.'
  if (estado === 'encerrada') periodo = 'A votação foi encerrada.'
  if (estado === 'embreve' && VOTACAO.abre) periodo = `A votação abre em ${dia(VOTACAO.abre)}.`

  return (
    <>
      {/* 1. Apresentação */}
      <section className="page-banner">
        <div className="wrap aw-hero">
          <div>
            <h1>CEJLL Awards</h1>
            <p className="aw-hero-destaque">Conheça os indicados e acompanhe a votação.</p>
          </div>
          <div className="aw-hero-img" aria-hidden="true">Imagem de destaque</div>
        </div>
      </section>

      <section className="section" aria-labelledby="oque-awards-titulo">
        <div className="wrap">
          
          <h2 className="section-title" id="oque-awards-titulo">O que é o CEJLL Awards?</h2>
          <p>O CEJLL Awards é uma premiação criada para reconhecer os destaques do CEJLL Fest, valorizando a criatividade, o talento e o trabalho dos estudantes envolvidos nos projetos e atividades do evento.</p>
          <p className="aw-aviso">A premiação busca valorizar não apenas os vencedores das competições, mas também o esforço e a dedicação de todos os estudantes que contribuíram para a realização do CEJLL Fest.</p>
        </div>
      </section>

      {/* 2. Categorias */}
      <section className="section section-mist" aria-labelledby="categorias-titulo">
        <div className="wrap">
          {CATEGORIAS_EXEMPLO && <span className="tag">Categorias de exemplo</span>}
          <h2 className="section-title" id="categorias-titulo">Categorias</h2>
          {CATEGORIAS_EXEMPLO && (
            <p>As categorias serão ajustadas conforme os projetos inscritos.</p>
          )}
          <ul className="aw-cats">
            {CATEGORIAS_AWARDS.map((c) => {
              const n = indicadosDe(c).length
              return (
                <li key={c.id}>
                  <a href={`#indicados-${c.id}`}>
                    <strong>{c.nome}</strong>
                    <span>{n === 0 ? (c.tipo === 'campeonato' ? 'Campeonato' : 'Indicados em breve') : `${n} ${n === 1 ? 'indicado' : 'indicados'}`}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 3. Indicados */}
      <section className="section" aria-labelledby="indicados-titulo">
        <div className="wrap">
          <h2 className="section-title" id="indicados-titulo">Indicados</h2>
          {CATEGORIAS_AWARDS.map((c) => {
            const lista = indicadosDe(c)
            return (
              <div key={c.id} id={`indicados-${c.id}`} className="aw-bloco">
                <h3>{c.nome}</h3>
                {c.descricao && <p>{c.descricao}</p>}
                {lista.length === 0 ? (
                  <p>{c.tipo === 'campeonato' ? 'O vencedor será anunciado depois da disputa, na cerimônia de encerramento.' : 'Os indicados desta categoria serão divulgados em breve.'}</p>
                ) : (
                  <div className="card-grid">
                    {lista.map((p) => (
                      <ProjetoCard
                        key={p.id}
                        projeto={p}
                        variante={VARIANTES[PROJETOS.indexOf(p) % VARIANTES.length]}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. Votação */}
      <section className="section section-mist" id="votacao" aria-labelledby="votacao-titulo">
        <div className="wrap">
          <div className="aw-votacao">
            <h2 id="votacao-titulo">Votação</h2>
            <span className={`status status-${estado}`}>{ROTULOS[estado]}</span>
            <p>{periodo}</p>
            {podeVotar ? (
              <a className="btn" href={VOTACAO.url} target="_blank" rel="noopener noreferrer">
                Votar
                <span className="visually-hidden"> no CEJLL Awards (abre em nova aba)</span>
              </a>
            ) : (
              (estado === 'aberta' && (VOTACAO.embeds || []).length > 0) ? null : <button className="btn" type="button" disabled>Votação não disponível</button>
            )}
            {estado === 'aberta' && (VOTACAO.embeds || []).length > 0 && (
              <div className="aw-embeds">
                {VOTACAO.embeds.map((e) => (
                  <iframe key={e.url} className="aw-embed" src={e.url} title={e.titulo} loading="lazy" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Resultado (só depois da cerimônia) */}
      <section className="section" aria-labelledby="resultado-titulo">
        <div className="wrap">
          <h2 className="section-title" id="resultado-titulo">Resultado</h2>

          {!RESULTADO.publicado ? (
            <p>Os resultados serão divulgados depois da cerimônia de encerramento.</p>
          ) : (
            <>
              <ul className="aw-vencedores">
                {RESULTADO.vencedores.map((v) => {
                  const categoria = CATEGORIAS_AWARDS.find((c) => c.id === v.categoria)
                  const projeto = PROJETOS.find((p) => p.id === v.projetoId)
                  if (!categoria || !projeto) return null
                  const mencoes = (v.mencoes || [])
                    .map((id) => PROJETOS.find((p) => p.id === id))
                    .filter(Boolean)
                  return (
                    <li key={v.categoria} className="aw-vencedor">
                      <span className="aw-premio"><span aria-hidden="true">★</span> Vencedor</span>
                      <h3>{categoria.nome}</h3>
                      <Link to={`/projetos/${projeto.id}`}>{projeto.nome}</Link>
                      {mencoes.length > 0 && (
                        <p className="aw-mencao">
                          Menção honrosa:{' '}
                          {mencoes.map((m, i) => (
                            <span key={m.id}>
                              {i > 0 && ', '}
                              <Link to={`/projetos/${m.id}`}>{m.nome}</Link>
                            </span>
                          ))}
                        </p>
                      )}
                    </li>
                  )
                })}
              </ul>

              <h3 className="aw-sub">Fotos da premiação</h3>
              <div className="quem-fotos">
                {Array.from({ length: RESULTADO.fotos }, (_, i) => (
                  <div
                    key={i}
                    className="galeria-item"
                    role="img"
                    aria-label={`Espaço reservado para a foto da premiação ${i + 1}`}
                  >
                    Foto da premiação {i + 1}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
