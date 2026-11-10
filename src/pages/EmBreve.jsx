import { Link, useLocation } from 'react-router-dom'
import { MENU } from '../data/menu'

export default function EmBreve() {
  const { pathname } = useLocation()
  const pagina = MENU.find((item) => item.href === pathname)

  return (
    <section className="em-breve">
      <h1>{pagina ? pagina.label : 'Página não encontrada'}</h1>
      <p>
        {pagina
          ? 'Esta página ainda está sendo feita. Volte em breve.'
          : 'Não encontramos esse endereço.'}
      </p>
      <Link className="btn" to="/">Voltar ao início</Link>
    </section>
  )
}
