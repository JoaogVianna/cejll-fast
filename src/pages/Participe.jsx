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
        <div className="wrap part-hero">
          <div>
            <h1>Participe do CEJLL Fest!</h1>
            <p className="part-hero-destaque">Faça parte do CEJLL Fest!</p>
            <p>
              Quer ajudar a organizar, apresentar um projeto ou criar uma atividade? Existem
              diferentes formas de participar. Escolha a que mais combina com você e faça sua
              inscrição!
            </p>
          </div>
          <div className="part-hero-img" aria-hidden="true">Imagem de destaque</div>
        </div>
      </section>

      <section className="section" aria-label="Formulários de inscrição">
        <div className="wrap">
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

      <section className="section" aria-labelledby="aviso-titulo">
        <div className="wrap">
          <h2 className="section-title" id="aviso-titulo">Aviso sobre as inscrições</h2>
          <p>Todas as propostas passarão por avaliação e organização antes de serem confirmadas.</p>
          <p className="part-aviso">
            <strong>Importante:</strong> o envio do formulário não garante automaticamente a
            participação no evento. As propostas estarão sujeitas à avaliação e autorização da
            direção e da organização do CEJLL Fest.
          </p>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="duvida-titulo">
        <div className="wrap">
          <div className="part-duvida">
            <h2 id="duvida-titulo">Ficou com alguma dúvida?</h2>
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
