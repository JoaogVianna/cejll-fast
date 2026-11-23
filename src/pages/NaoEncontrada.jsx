import { Link } from 'react-router-dom'

export default function NaoEncontrada() {
  return (
    <section className="em-breve">
      <h1>Página não encontrada</h1>
      <p>Não encontramos o endereço que você abriu. Que tal voltar para o início?</p>
      <Link className="btn" to="/">Ir para o início</Link>
    </section>
  )
}
