import { situacaoDoPeriodo } from '../utils/situacao'
import './FormCard.css'

const ROTULOS = {
  aberta: '● Inscrições abertas',
  embreve: '◔ Em breve',
  encerrada: '✕ Encerradas',
}

// um ícone simples para cada formulário (desenhado em SVG, sem imagem externa)
const ICONES = {
  comite: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c3.2 0 5.5 2 5.5 5.3" />
    </>
  ),
  projetos: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="M3 17l5-4 4 3 3-2 6 4" />
    </>
  ),
  oficinas: (
    <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />
  ),
}

const formatar = (iso) =>
  new Date(iso).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })

function periodo(f, estado) {
  if (estado === 'aberta') return f.fecha ? `Inscrições até ${formatar(f.fecha)}.` : 'Inscrições abertas.'
  if (estado === 'encerrada') return f.fecha ? `Encerradas em ${formatar(f.fecha)}.` : 'As inscrições foram encerradas.'
  return f.abre ? `As inscrições abrem em ${formatar(f.abre)}.` : 'Inscrições: período a definir.'
}

export default function FormCard({ formulario: f, numero }) {
  const estado = situacaoDoPeriodo(f)

  return (
    <article className={`card form-card form-${f.variante}`} id={f.id}>
      <div className="form-topo">
        <span className="form-icone" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {ICONES[f.id]}
          </svg>
        </span>
        <span className="form-num" aria-hidden="true">0{numero}</span>
      </div>

      <h2>{f.titulo}</h2>
      <p>{f.quem}</p>
      {f.detalhes.map((d, i) => (
        <p key={i}>{d}</p>
      ))}

      <span className={`status status-${estado}`}>{ROTULOS[estado]}</span>
      <p className="form-periodo">{periodo(f, estado)}</p>

      {estado === 'aberta' ? (
        <a className="btn" href={f.url} target="_blank" rel="noopener noreferrer">
          {f.botao}
          <span className="visually-hidden"> em {f.titulo} (abre em nova aba)</span>
        </a>
      ) : (
        <button className="btn" type="button" disabled>
          Inscrições não disponíveis
        </button>
      )}
    </article>
  )
}
