import { Link, useParams } from 'react-router-dom'
import { OFICINAS } from '../data/oficinas'
import { horarioDaOficina } from '../utils/horarioOficina'

function textoInscricao(o) {
  const partes = []
  if (o.inscricao === 'previa') partes.push('É necessária inscrição prévia')
  if (o.inscricao === 'nao') partes.push('Não precisa de inscrição')
  if (o.vagas === 'limitadas') partes.push('Vagas limitadas')
  if (o.vagas === 'abertas') partes.push('Aberta a todos')
  return partes.length ? partes.join('. ') + '.' : null
}

export default function OficinaDetalhe() {
  const { id } = useParams()
  const indice = OFICINAS.findIndex((o) => o.id === id)
  const o = OFICINAS[indice]

  if (!o) {
    return (
      <section className="em-breve">
        <h1>Atividade não encontrada</h1>
        <p>Não encontramos essa atividade.</p>
        <Link className="btn" to="/oficinas">Ver todas as atividades</Link>
      </section>
    )
  }

  const proxima = OFICINAS[(indice + 1) % OFICINAS.length]
  const horario = horarioDaOficina(o)

  // só entram na lista as informações que já estão definidas
  const linhas = [
    ['Dia', horario && !horario.livre ? horario.dia : null],
    [
      'Horário',
      horario
        ? horario.livre
          ? 'Atividade livre: pode ser visitada durante boa parte do evento.'
          : `Das ${horario.inicio} às ${horario.fim}`
        : null,
    ],
    ['Duração', o.duracao],
    ['Local', o.local],
    ['Responsáveis', o.responsaveis ? o.responsaveis.join(', ') : null],
    ['Inscrição', textoInscricao(o)],
  ].filter(([, valor]) => valor)

  const faltaAlgo = !horario || !o.local || !o.responsaveis

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <Link className="voltar" to="/oficinas">← Todas as atividades</Link>
          <span className="projeto-tag">{o.categoria}</span>
          <h1>{o.nome}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap projeto-layout">
          <div>
            <div
              className="galeria-item"
              role="img"
              aria-label="Espaço reservado para a imagem da atividade"
            >
              Imagem da atividade
            </div>

            {o.exemplo && <span className="tag" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Exemplo</span>}
            <h2 className="section-title">Sobre a atividade</h2>
            <p>{o.descricao}</p>

            {o.comoFunciona.length > 0 && (
              <>
                <h3 className="projeto-subtitulo">Como funciona</h3>
                {o.comoFunciona.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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
              {linhas.length === 0 && (
                <div>
                  <dt>Informações</dt>
                  <dd>Os detalhes desta atividade serão divulgados em breve.</dd>
                </div>
              )}
            </dl>

            {faltaAlgo && linhas.length > 0 && (
              <p style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                Algumas informações, como horário, local e responsáveis, serão divulgadas em breve.
              </p>
            )}

            <p style={{ marginTop: '1rem' }}>
              <Link className="btn btn-outline" to="/programacao">Ver na programação</Link>
            </p>
          </div>
        </div>
      </section>

      <Link className="proximo" to={`/oficinas/${proxima.id}`}>
        <span className="wrap">
          <span className="proximo-rotulo">Próxima atividade</span>
          <span className="proximo-nome">{proxima.nome} →</span>
        </span>
      </Link>
    </>
  )
}
