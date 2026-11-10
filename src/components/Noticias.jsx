import { Link } from 'react-router-dom'
import Card from './Card'
import { NOTICIAS } from '../data/noticias'

function formatarData(data) {
  if (!data) return 'Data em breve'
  return new Date(data + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Noticias() {
  return (
    <section className="section section-mist" aria-labelledby="noticias-titulo">
      <div className="wrap">
        <h2 className="section-title" id="noticias-titulo">Notícias</h2>
        <div className="card-grid">
          {NOTICIAS.map((n) => (
            <Card
              key={n.id}
              media={n.categoria}
              variante={n.variante}
              titulo={n.titulo}
              texto={n.texto}
              exemplo={n.exemplo}
              meta={`${formatarData(n.data)} · ${n.categoria}`}
            />
          ))}
        </div>
        <p style={{ marginTop: '2rem' }}>
          <Link className="btn btn-outline" to="/noticias">Ver todas as notícias</Link>
        </p>
      </div>
    </section>
  )
}
