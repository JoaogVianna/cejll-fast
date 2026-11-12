import { Link } from 'react-router-dom'
import Card from './Card'
import { NOTICIAS } from '../data/noticias'
import { formatarData } from '../utils/formatarData'

// Na Home aparecem só as 3 notícias mais recentes
const RECENTES = NOTICIAS.slice(0, 3)

export default function Noticias() {
  return (
    <section className="section section-mist" aria-labelledby="noticias-titulo">
      <div className="wrap">
        <h2 className="section-title" id="noticias-titulo">Notícias</h2>
        <div className="card-grid">
          {RECENTES.map((n) => (
            <Card
              key={n.id}
              media={n.categoria}
              variante={n.variante}
              titulo={n.titulo}
              texto={n.texto}
              exemplo={n.exemplo}
              meta={`${formatarData(n.data)} · ${n.categoria}`}
              link={{ para: `/noticias/${n.id}`, rotulo: 'Ler notícia' }}
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
