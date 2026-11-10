import { Link, useParams } from 'react-router-dom'
import { PROJETOS } from '../data/projetos'
import './ProjetoDetalhe.css'

export default function ProjetoDetalhe() {
  // useParams lê a parte variável do endereço: /projetos/:id
  const { id } = useParams()
  const indice = PROJETOS.findIndex((p) => p.id === id)
  const projeto = PROJETOS[indice]

  if (!projeto) {
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

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <Link className="voltar" to="/projetos">← Todos os projetos</Link>
          <span className="projeto-tag">{projeto.categoria}</span>
          <h1>{projeto.nome}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap projeto-layout">
          <div>
            {projeto.exemplo && <span className="tag">Exemplo</span>}
            <h2 className="section-title">Sobre o projeto</h2>
            <p>{projeto.descricao}</p>

            {projeto.links.length > 0 && (
              <>
                <h3 className="projeto-subtitulo">Links</h3>
                <ul className="projeto-links">
                  {projeto.links.map((l) => (
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

          <dl className="projeto-info">
            <div>
              <dt>Participantes</dt>
              <dd>{projeto.participantes.join(', ')}</dd>
            </div>
            <div>
              <dt>Categoria</dt>
              <dd>{projeto.categoria}</dd>
            </div>
            <div>
              <dt>Localização</dt>
              <dd>{projeto.localizacao}</dd>
            </div>
            <div>
              <dt>Horários</dt>
              <dd>{projeto.horarios}</dd>
            </div>
            <div>
              <dt>CEJLL Awards</dt>
              <dd>{projeto.awards ?? 'Não está concorrendo'}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="galeria-titulo">
        <div className="wrap">
          <h2 className="section-title" id="galeria-titulo">Galeria</h2>
          <div className="galeria">
            <div className="galeria-item">Imagem 1</div>
            <div className="galeria-item">Imagem 2</div>
            <div className="galeria-item">Imagem 3</div>
          </div>
        </div>
      </section>

      <Link className="proximo" to={`/projetos/${proximo.id}`}>
        <span className="wrap">
          <span className="proximo-rotulo">Próximo projeto</span>
          <span className="proximo-nome">{proximo.nome} →</span>
        </span>
      </Link>
    </>
  )
}
