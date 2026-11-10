import { Link } from 'react-router-dom'
import './Card.css'

// Um cartão reutilizável. Tudo o que ele mostra chega por "props".
export default function Card({ media, variante = 'navy', titulo, texto, meta, exemplo, link }) {
  return (
    <article className="card">
      <div className={`card-media card-media-${variante}`} aria-hidden="true">
        {media}
      </div>
      <div className="card-body">
        {exemplo && <span className="tag">Exemplo</span>}
        {meta && <span className="card-meta">{meta}</span>}
        <h3>{titulo}</h3>
        <p>{texto}</p>
        {link && (
          <Link className="btn" to={link.para}>
            {link.rotulo}
          </Link>
        )}
      </div>
    </article>
  )
}
