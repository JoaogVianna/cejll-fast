import { Link, useParams } from 'react-router-dom'
import { PROJETOS } from '../data/projetos'
import './ProjetoDetalhe.css'

export default function ProjetoDetalhe() {
  // useParams lê a parte variável do endereço: /projetos/:id
  const { id } = useParams()
  const indice = PROJETOS.findIndex((p) => p.id === id)
  const p = PROJETOS[indice]

  if (!p) {
    return (
      <section className="em-breve">
        <h1>Projeto não encontrado</h1>
        <p>Não encontramos esse projeto no catálogo.</p>
        <Link className="btn" to="/projetos">Ver todos os projetos</Link>
      </section>
    )
  }

  // o "%" faz o último projeto apontar de volta para o primeiro
  const proximo = PROJETOS[(indice + 1) % PROJETOS.length]

  // a 1ª imagem é a principal; as outras vão para a galeria
  const [principal, ...galeria] = p.imagens

  // só entram na lista as informações que já estão definidas
  const linhas = [
    ['Participantes', p.participantes ? p.participantes.join(', ') : null],
    ['Turma', p.turma],
    ['Ferramentas', p.ferramentas ? p.ferramentas.join(', ') : null],
    ['Categoria', p.categoria],
    ['Localização', p.localizacao],
    ['Horários', p.horarios],
    ['CEJLL Awards', p.awards],
  ].filter(([, valor]) => valor)

  const faltaAlgo = !p.participantes || !p.turma

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <Link className="voltar" to="/projetos">← Todos os projetos</Link>
          <span className="projeto-tag">{p.categoria}</span>
          <h1>{p.nome}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap projeto-layout">
          <div>
            {principal ? (
              <img className="projeto-img" src={principal.src} alt={principal.alt} />
            ) : (
              <div
                className="galeria-item"
                role="img"
                aria-label="Espaço reservado para a imagem do projeto"
              >
                Imagem do projeto
              </div>
            )}

            {p.exemplo && (
              <span className="tag" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                Exemplo
              </span>
            )}
            <h2 className="section-title">Sobre o projeto</h2>
            <p className="lead">{p.resumo}</p>
            <p>{p.descricao}</p>

            {p.links.length > 0 && (
              <>
                <h3 className="projeto-subtitulo">Links relacionados</h3>
                <ul className="projeto-links">
                  {p.links.map((l) => (
                    <li key={l.url}>
                      <a href={l.url} target="_blank" rel="noopener noreferrer">
                        {l.rotulo}
                        <span className="visually-hidden"> (abre em nova aba)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            <dl className="projeto-info">
              {linhas.map(([titulo, valor]) => (
                <div key={titulo}>
                  <dt>{titulo}</dt>
                  <dd>{valor}</dd>
                </div>
              ))}
            </dl>

            {faltaAlgo && (
              <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                Algumas informações, como participantes e turma, serão divulgadas em breve.
              </p>
            )}
          </div>
        </div>
      </section>

      {galeria.length > 0 && (
        <section className="section section-mist" aria-labelledby="galeria-titulo">
          <div className="wrap">
            <h2 className="section-title" id="galeria-titulo">Galeria</h2>
            <div className="galeria">
              {galeria.map((img) => (
                <img
                  key={img.src}
                  className="projeto-galeria-img"
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Link className="proximo" to={`/projetos/${proximo.id}`}>
        <span className="wrap">
          <span className="proximo-rotulo">Próximo projeto</span>
          <span className="proximo-nome">{proximo.nome} →</span>
        </span>
      </Link>
    </>
  )
}
