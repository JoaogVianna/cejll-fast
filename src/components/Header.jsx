import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MENU } from '../data/menu'
import './Header.css'

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link className="brand" to="/">
            CEJLL<span>Fest</span>
          </Link>

          <div className="header-actions">
            <Link className="btn" to="/participe">Participe</Link>
            <button
              className="menu-toggle"
              aria-label="Abrir menu"
              aria-expanded={aberto}
              onClick={() => setAberto(true)}
            >
              <i></i><i></i><i></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={aberto ? 'overlay aberto' : 'overlay'}
        onClick={() => setAberto(false)}
      />

      <nav className={aberto ? 'menu-panel aberto' : 'menu-panel'} aria-label="Menu principal">
        <button className="menu-close" aria-label="Fechar menu" onClick={() => setAberto(false)}>
          ✕
        </button>
        <ul>
          {MENU.map((item) => (
            <li key={item.href}>
              <NavLink to={item.href} end onClick={() => setAberto(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}