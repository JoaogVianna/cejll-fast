import { Link } from 'react-router-dom'
import {
  O_QUE_E,
  OBJETIVOS,
  COMO_FUNCIONA,
  QUEM_PODE,
  ORGANIZACAO,
} from '../data/sobre'
import './Sobre.css'

export default function Sobre() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Sobre o CEJLL Fest</h1>
        </div>
      </section>

      <section className="section" aria-labelledby="oquee-titulo">
        <div className="wrap sobre-texto">
          <h2 className="section-title" id="oquee-titulo">O que é o CEJLL Fest?</h2>
          {O_QUE_E.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="objetivos-titulo">
        <div className="wrap">
          <h2 className="section-title" id="objetivos-titulo">Objetivos do evento</h2>
          <ol className="objetivos">
            {OBJETIVOS.map((o, i) => (
              <li key={o.titulo} className="objetivo">
                <span className="objetivo-num" aria-hidden="true">0{i + 1}</span>
                <h3>{o.titulo}</h3>
                <p>{o.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="como-titulo">
        <div className="wrap">
          <h2 className="section-title" id="como-titulo">Como funciona?</h2>
          <div className="como-grid">
            {COMO_FUNCIONA.map((c) => (
              <article key={c.titulo} className="como-item">
                <h3>{c.titulo}</h3>
                <p>{c.texto}</p>
                <Link className="btn btn-outline" to={c.para}>{c.rotulo}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="quem-titulo">
        <div className="wrap sobre-texto">
          <h2 className="section-title" id="quem-titulo">Quem pode participar?</h2>
          {QUEM_PODE.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            <Link className="btn" to="/participe">Como participar</Link>{' '}
            <Link className="btn btn-outline" to="/faq">Perguntas frequentes</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="organizacao-titulo">
        <div className="wrap sobre-texto">
          <h2 className="section-title" id="organizacao-titulo">Organização</h2>
          {ORGANIZACAO.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            <Link className="btn btn-outline" to="/participe#comite">Quero fazer parte do comitê</Link>
          </p>
        </div>
      </section>
    </>
  )
}
