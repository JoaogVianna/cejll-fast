import { useState } from 'react'
import Card from '../components/Card'
import { OFICINAS } from '../data/oficinas'

const VARIANTES = ['navy', 'pink', 'gray']

// "Todas" + cada categoria que existe nos dados (sem repetir)
const CATEGORIAS = ['Todas', ...new Set(OFICINAS.map((o) => o.categoria))]

export default function Oficinas() {
  const [categoria, setCategoria] = useState('Todas')

  const visiveis =
    categoria === 'Todas' ? OFICINAS : OFICINAS.filter((o) => o.categoria === categoria)

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Oficinas e atividades</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">
            Aqui estão as atividades do evento. Para ver só os horários de tudo o que acontece,
            use a página Programação.
          </p>

          <div className="filtros" role="group" aria-label="Filtrar por tipo de atividade">
            {CATEGORIAS.map((c) => (
              <button
                key={c}
                type="button"
                className={c === categoria ? 'filtro ativo' : 'filtro'}
                aria-pressed={c === categoria}
                onClick={() => setCategoria(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="filtro-resultado" aria-live="polite">
            {visiveis.length} {visiveis.length === 1 ? 'atividade' : 'atividades'}
          </p>

          <div className="card-grid">
            {visiveis.map((o, i) => (
              <Card
                key={o.id}
                media={o.categoria}
                variante={VARIANTES[i % VARIANTES.length]}
                titulo={o.nome}
                texto={o.descricao}
                exemplo={o.exemplo}
                meta={[
                  `${o.diaRotulo} · ${o.inicio} às ${o.fim}`,
                  o.local,
                  o.inscricaoPrevia ? 'Inscrição prévia' : 'Sem inscrição prévia',
                ].join(' · ')}
                link={{ para: `/oficinas/${o.id}`, rotulo: 'Ver atividade' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
