import { Link } from 'react-router-dom'
import { horarioDaOficina } from '../utils/horarioOficina'

export default function OficinaCard({ oficina: o, variante }) {
  const horario = horarioDaOficina(o)

  return (
    <article className="card of-card">
      <div className={`card-media card-media-${variante}`} aria-hidden="true">
        {o.categoria}
      </div>

      <div className="card-body">
        {o.exemplo && <span className="tag">Exemplo</span>}

        {/* atividade livre e atividade com horário têm selos diferentes (ícone + texto) */}
        {horario?.livre && (
          <span className="selo selo-livre">
            <span aria-hidden="true">∞</span> Livre durante o evento
          </span>
        )}
        {horario && !horario.livre && (
          <span className="selo selo-marcado">
            <span aria-hidden="true">◷</span> Das {horario.inicio} às {horario.fim}
          </span>
        )}

        <span className="card-meta">{o.categoria}</span>
        <h3>{o.nome}</h3>
        <p>{o.resumo}</p>

        {(o.duracao || o.local) && (
          <ul className="of-info">
            {o.duracao && <li>Duração: {o.duracao}</li>}
            {o.local && <li>Local: {o.local}</li>}
          </ul>
        )}

        <Link className="btn" to={`/oficinas/${o.id}`}>
          Ver detalhes<span className="visually-hidden"> de {o.nome}</span>
        </Link>
      </div>
    </article>
  )
}
