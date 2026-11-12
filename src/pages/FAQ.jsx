import { Link } from 'react-router-dom'
import { PERGUNTAS } from '../data/faq'
import './FAQ.css'

export default function FAQ() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Perguntas frequentes</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">
            Clique em uma pergunta para ver a resposta. Não achou o que procurava? Acompanhe as
            notícias, que a organização atualiza com novos avisos.
          </p>

          <div className="faq-lista">
            {PERGUNTAS.map((p) => (
              <details key={p.pergunta} className="faq-item">
                <summary>{p.pergunta}</summary>
                <div className="faq-resposta">
                  {p.provisoria && <span className="tag">Resposta a confirmar</span>}
                  <p>{p.resposta}</p>
                  {p.link && (
                    <Link className="btn btn-outline" to={p.link.para}>
                      {p.link.rotulo}
                    </Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
