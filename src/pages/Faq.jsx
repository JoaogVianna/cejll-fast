import { Link } from 'react-router-dom'
import { FAQ } from '../data/faq'
import './Faq.css'

export default function Faq() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Perguntas frequentes</h1>
          <p className="faq-intro">Tire suas dúvidas sobre o CEJLL Fest.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap faq-wrap">
          {/* <details> e <summary> já expandem e recolhem, inclusive pelo teclado */}
          {FAQ.map((item) => (
            <details key={item.id} className="faq-item">
              <summary>{item.pergunta}</summary>
              <div className="faq-resposta">
                {item.provisoria && <span className="tag">Resposta provisória</span>}
                {item.resposta.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {item.link && (
                  <Link className="btn btn-outline" to={item.link.para}>
                    {item.link.rotulo}
                  </Link>
                )}
              </div>
            </details>
          ))}

          <div className="faq-duvida">
            <h2>Ficou com alguma dúvida?</h2>
            <p>Entre em contato com a organização do CEJLL Fest pelo WhatsApp: (21) 98542-3938.</p>
            <a
              className="btn"
              href="https://wa.me/5521985423938"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
              <span className="visually-hidden"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
