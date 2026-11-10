import Card from './Card'
import { DESTAQUES } from '../data/destaques'

export default function Destaques() {
  return (
    <section className="section" aria-labelledby="destaques-titulo">
      <div className="wrap">
        <h2 className="section-title" id="destaques-titulo">Destaques</h2>
        <div className="card-grid">
          {DESTAQUES.map((d) => (
            <Card
              key={d.id}
              media={d.titulo}
              variante={d.variante}
              titulo={d.titulo}
              texto={d.texto}
              exemplo={d.exemplo}
              link={{ para: d.para, rotulo: d.botao }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
