import { Link } from 'react-router-dom'
import './Apresentacao.css'

export default function Apresentacao() {
  return (
    <section className="section" aria-labelledby="apresentacao-titulo">
      <div className="wrap intro-grid">
        <h2 className="intro-statement" id="apresentacao-titulo">
          Evento feito de alunos para alunos
        </h2>
        <div>
          <p>
            O CEJLL Fest reúne projetos, talentos e produções dos estudantes em um só lugar:
            estandes, oficinas, apresentações e a competição CEJLL Awards.
          </p>
          <Link className="btn btn-outline" to="/sobre">Conheça o evento</Link>
        </div>
      </div>
    </section>
  )
}
