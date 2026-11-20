import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NOTICIAS } from '../data/noticias'
import { formatarData } from '../utils/formatarData'
import { tempoDeLeitura } from '../utils/tempoLeitura'
import './NoticiaDetalhe.css'

export default function NoticiaDetalhe() {
  const { id } = useParams()
  // os hooks (useState) ficam sempre ANTES de qualquer "return" antecipado
  const [copiado, setCopiado] = useState(false)

  const noticia = NOTICIAS.find((n) => n.id === id)

  if (!noticia) {
    return (
      <section className="em-breve">
        <h1>Notícia não encontrada</h1>
        <p>Não encontramos essa publicação.</p>
        <Link className="btn" to="/noticias">Ver todas as notícias</Link>
      </section>
    )
  }

  // usa o compartilhamento do aparelho (celular) ou, se não houver, copia o link
  async function compartilhar() {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: noticia.titulo, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 3000)
    } catch {
      // a pessoa cancelou ou o navegador bloqueou: não há nada a fazer
    }
  }

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <Link className="voltar" to="/noticias">← Todas as notícias</Link>
          <span className="projeto-tag">{noticia.categoria}</span>
          <h1>{noticia.titulo}</h1>
        </div>
      </section>

      <article className="section">
        <div className="wrap noticia-corpo">
          {noticia.exemplo && <span className="tag">Exemplo</span>}
          <p className="noticia-data">
            Publicado em {formatarData(noticia.data)} · {tempoDeLeitura(noticia.texto)} min de
            leitura
          </p>

          {noticia.imagem ? (
            <img className="noticia-principal" src={noticia.imagem.src} alt={noticia.imagem.alt} />
          ) : (
            <div
              className="galeria-item"
              role="img"
              aria-label="Espaço reservado para a imagem principal"
            >
              Imagem principal
            </div>
          )}

          {noticia.texto.map((bloco, i) =>
            typeof bloco === 'string' ? (
              <p key={i}>{bloco}</p>
            ) : (
              <h2 key={i} className="noticia-sub">{bloco.subtitulo}</h2>
            ),
          )}

          {noticia.imagens.length > 0 && (
            <div className="noticia-imagens">
              {noticia.imagens.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
              ))}
            </div>
          )}

          {noticia.creditos && <p className="noticia-creditos">Créditos: {noticia.creditos}</p>}

          <div className="noticia-acoes">
            <button type="button" className="btn" onClick={compartilhar}>
              Compartilhar
            </button>
            <Link className="btn btn-outline" to="/noticias">Voltar às notícias</Link>
            <span className="noticia-aviso" role="status">
              {copiado ? 'Link copiado!' : ''}
            </span>
          </div>
        </div>
      </article>
    </>
  )
}
