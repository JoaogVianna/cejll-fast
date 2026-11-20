import { Link } from 'react-router-dom'
import { ATIVIDADES, DIAS } from '../data/programacao'
import './ProgramacaoDestaque.css'

const MAXIMO = 4

// Se alguma atividade tiver "destaque: true" em data/programacao.js, só essas aparecem.
// Se nenhuma tiver, mostra as primeiras atividades do Dia 1.
function escolherAtividades() {
  const marcadas = ATIVIDADES.filter((a) => a.destaque)
  const base = marcadas.length ? marcadas : ATIVIDADES.filter((a) => a.dia === DIAS[0].id)
  return [...base]
    .sort((a, b) => a.dia.localeCompare(b.dia) || a.inicio.localeCompare(b.inicio))
    .slice(0, MAXIMO)
}

export default function ProgramacaoDestaque() {
  const atividades = escolherAtividades()
  if (atividades.length === 0) return null

  return (
    <section className="section" aria-labelledby="prog-destaque-titulo">
      <div className="wrap">
        <h2 className="section-title" id="prog-destaque-titulo">Programação em destaque</h2>

        <ol className="prog-lista">
          {atividades.map((a) => {
            const dia = DIAS.find((d) => d.id === a.dia)
            return (
              <li key={a.id} className="prog-item">
                <div className="prog-quando">
                  <span className="prog-hora">{a.inicio}</span>
                  <span className="prog-dia">{dia ? dia.rotulo : ''}</span>
                </div>
                <div className="prog-corpo">
                  {a.exemplo && <span className="tag">Exemplo</span>}
                  <h3>{a.nome}</h3>
                  <p className="prog-meta">
                    {a.local} · {a.categoria}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        <p style={{ marginTop: '2rem' }}>
          <Link className="btn" to="/programacao">Ver programação completa</Link>
        </p>
      </div>
    </section>
  )
}
