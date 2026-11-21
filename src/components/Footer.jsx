import './Logo.css'
import { Link } from 'react-router-dom'
import { MENU } from '../data/menu'
import { FORMULARIOS } from '../data/formularios'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              CEJLL<span>Fest</span>
            </Link>
            <p>Evento feito de alunos para alunos.</p>
          </div>

          <div>
            <h2>Navegue</h2>
            <ul>
              {MENU.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/faq">Perguntas frequentes</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Participe</h2>
            <ul>
              {FORMULARIOS.map((f) => (
                <li key={f.id}>
                  <Link to={`/participe#${f.id}`}>{f.titulo}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Contato</h2>
            <p>Os contatos da organização e as redes sociais serão divulgados em breve.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CEJLL Fest</p>
        </div>
      </div>
      <p className="footer-credito">Arte do evento: <a href="https://instagram.com/yunyunilove.you" target="_blank" rel="noopener noreferrer">@yunyunilove.you</a></p>
    </footer>
  )
}
