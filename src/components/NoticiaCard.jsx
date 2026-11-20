import { Link } from 'react-router-dom'
import { formatarData } from '../utils/formatarData'
import { tempoDeLeitura } from '../utils/tempoLeitura'
import './NoticiaCard.css'

export default function NoticiaCard({ noticia: n, variante = 'navy', grande = false }) {
  return (
    <article className={grande ? 'card noticia-card noticia-grande' : 'card noticia-card'}>
      <div className="noticia-media">
        {n.imagem ? (
          <img className="noticia-img" src={n.imagem.src} alt={n.imagem.alt} loading="lazy" />
        ) : (
          <div className={`card-media card-media-${variante}`} aria-hidden="true">
            {n.categoria}
          </div>
        )}
      </div>

      <div className="card-body">
        {n.exemplo && <span className="tag">Exemplo</span>}
        <span className="card-meta">
          {formatarData(n.data)} · {n.categoria} · {tempoDeLeitura(n.texto)} min de leitura
        </span>
        <h3>{n.titulo}</h3>
        <p>{n.resumo}</p>
        <Link className="btn" to={`/noticias/${n.id}`}>
          Ler notícia<span className="visually-hidden"> {n.titulo}</span>
        </Link>
      </div>
    </article>
  )
}
