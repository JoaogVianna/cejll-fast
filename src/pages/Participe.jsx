import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FormCard from '../components/FormCard'
import { FORMULARIOS } from '../data/formularios'
import './Participe.css'

export default function Participe() {
  // quando o endereço vem com #comite, #projetos ou #oficinas, rola até o cartão
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
  }, [hash])

  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <h1>Faça parte do CEJLL Fest!</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lead">
            Existem diferentes maneiras de participar do evento. Você pode ajudar na organização,
            apresentar um projeto ou criar uma atividade para outros estudantes.
          </p>
          <div className="form-grid">
            {FORMULARIOS.map((f, i) => (
              <FormCard key={f.id} formulario={f} numero={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="periodos-titulo">
        <div className="wrap">
          <h2 className="section-title" id="periodos-titulo">Períodos de inscrição</h2>
          <p>
            Cada formulário mostra a situação atual das inscrições e as datas de abertura e
            encerramento, quando já definidas.
          </p>
          <ul className="legend">
            <li>
              <span className="status status-aberta">● Inscrições abertas</span>
              <p>O formulário está disponível.</p>
            </li>
            <li>
              <span className="status status-embreve">◔ Em breve</span>
              <p>As inscrições ainda não começaram.</p>
            </li>
            <li>
              <span className="status status-encerrada">✕ Encerradas</span>
              <p>O formulário não aceita novas inscrições.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
