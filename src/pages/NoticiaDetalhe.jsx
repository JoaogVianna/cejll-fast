import { Link, useParams } from 'react-router-dom'
import { NOTICIAS } from '../data/noticias'
import { formatarData } from '../utils/formatarData'
import './ProjetoDetalhe.css'
import './NoticiaDetalhe.css'

export default function NoticiaDetalhe() {
  // useParams lê a parte variável do endereço: /noticias/:id
  const { id } = useParams()
  const indice = NOTICIAS.findIndex((n) => String(n.id) === id)
  const noticia = NOTICIAS[indice]

  if (!noticia) {
    return (
      <section className="em-breve">
        <h1>Notícia não encontrada</h1>
        <p>Não encontramos essa notícia.</p>
        <Link className="btn" to="/noticias">Ver todas as notícias</Link>
      </section>
    )
  }

  // o "%" faz a última notícia apontar de volta para a primeira
  const proxima = NOTICIAS[(indice + 1) % NOTICIAS.length]

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <Link className="voltar" to="/noticias">← Todas as notícias</Link>
          <span className="projeto-tag">{noticia.categoria}</span>
          <h1>{noticia.titulo}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap noticia-texto">
          {noticia.exemplo && <span className="tag">Exemplo</span>}
          <p className="noticia-data">
            <time dateTime={noticia.data ?? undefined}>{formatarData(noticia.data)}</time>
          </p>
          {noticia.conteudo.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>
      </section>

      {proxima.id !== noticia.id && (
        <Link className="proximo" to={`/noticias/${proxima.id}`}>
          <span className="wrap">
            <span className="proximo-rotulo">Próxima notícia</span>
            <span className="proximo-nome">{proxima.titulo} →</span>
          </span>
        </Link>
      )}
    </>
  )
}
