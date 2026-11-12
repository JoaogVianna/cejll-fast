import { Link, useParams } from 'react-router-dom'
import { OFICINAS } from '../data/oficinas'
import { duracao } from '../utils/duracao'
import './ProjetoDetalhe.css'

export default function OficinaDetalhe() {
  // useParams lê a parte variável do endereço: /oficinas/:id
  const { id } = useParams()
  const oficina = OFICINAS.find((o) => o.id === id)

  if (!oficina) {
    return (
      <section className="em-breve">
        <h1>Atividade não encontrada</h1>
        <p>Não encontramos essa atividade.</p>
        <Link className="btn" to="/oficinas">Ver todas as atividades</Link>
      </section>
    )
  }

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <Link className="voltar" to="/oficinas">← Todas as atividades</Link>
          <span className="projeto-tag">{oficina.categoria}</span>
          <h1>{oficina.nome}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap projeto-layout">
          <div>
            {oficina.exemplo && <span className="tag">Exemplo</span>}
            <h2 className="section-title">Sobre a atividade</h2>
            <p>{oficina.detalhes}</p>

            {oficina.inscricaoPrevia &&
              (oficina.inscricaoUrl ? (
                <p>
                  <a
                    className="btn"
                    href={oficina.inscricaoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inscrever-se
                    <span className="visually-hidden"> (abre em nova aba)</span>
                  </a>
                </p>
              ) : (
                <p>
                  <button className="btn" type="button" disabled>
                    Inscrição ainda não disponível
                  </button>
                </p>
              ))}

            <p>
              <Link to="/programacao">Ver na programação completa</Link>
            </p>
          </div>

          <dl className="projeto-info">
            <div>
              <dt>Responsável</dt>
              <dd>{oficina.responsavel}</dd>
            </div>
            <div>
              <dt>Local</dt>
              <dd>{oficina.local}</dd>
            </div>
            <div>
              <dt>Dia e horário</dt>
              <dd>
                {oficina.diaRotulo}, das {oficina.inicio} às {oficina.fim}
              </dd>
            </div>
            <div>
              <dt>Duração</dt>
              <dd>{duracao(oficina.inicio, oficina.fim)}</dd>
            </div>
            <div>
              <dt>Materiais</dt>
              <dd>{oficina.materiais}</dd>
            </div>
            <div>
              <dt>Inscrição prévia</dt>
              <dd>{oficina.inscricaoPrevia ? 'Necessária' : 'Não é necessária'}</dd>
            </div>
            <div>
              <dt>Vagas</dt>
              <dd>{oficina.vagas ? `${oficina.vagas} vagas` : 'Aberta a todos'}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}
