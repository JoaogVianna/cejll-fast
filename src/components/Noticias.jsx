import { Link } from 'react-router-dom'
import NoticiaCard from './NoticiaCard'
import { NOTICIAS } from '../data/noticias'
import { ordenarNoticias } from '../utils/ordenarNoticias'

const VARIANTES = ['pink', 'navy', 'gray']

export default function Noticias() {
  const recentes = ordenarNoticias(NOTICIAS).slice(0, 3)

  return (
    <section className="section section-mist" aria-labelledby="noticias-titulo">
      <div className="wrap">
        <h2 className="section-title" id="noticias-titulo">Notícias</h2>
        <div className="card-grid">
          {recentes.map((n, i) => (
            <NoticiaCard key={n.id} noticia={n} variante={VARIANTES[i % VARIANTES.length]} />
          ))}
        </div>
        <p style={{ marginTop: '2rem' }}>
          <Link className="btn btn-outline" to="/noticias">Ver todas as notícias</Link>
        </p>
      </div>
    </section>
  )
}
