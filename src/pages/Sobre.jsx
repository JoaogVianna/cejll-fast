import { Link } from 'react-router-dom'
import { SOBRE } from '../data/sobre'
import './Sobre.css'

function Provisorio({ ativo }) {
  return ativo ? <span className="tag">Texto provisório</span> : null
}

export default function Sobre() {
  // só mostra os números que já foram confirmados
  const numeros = SOBRE.numeros.filter((n) => n.valor !== null && n.valor !== undefined)

  return (
    <>
      {/* 1. Apresentação */}
      <section className="page-banner">
        <div className="wrap sobre-hero">
          <div>
            <h1>Sobre o CEJLL Fest</h1>
            <p className="sobre-hero-destaque">Um espaço para criar, compartilhar e descobrir.</p>
            <p>{SOBRE.intro}</p>
          </div>
          <div className="sobre-hero-img" aria-hidden="true">Imagem de destaque</div>
        </div>
      </section>

      {/* 2. O que é o CEJLL Fest? */}
      <section className="section" aria-labelledby="oque-titulo">
        <div className="wrap sobre-split">
          <div>
            <Provisorio ativo={SOBRE.oQueE.provisorio} />
            <h2 className="section-title" id="oque-titulo">O que é o CEJLL Fest?</h2>
            {SOBRE.oQueE.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div
            className="galeria-item"
            role="img"
            aria-label="Espaço reservado para uma foto do ambiente escolar"
          >
            Foto do ambiente escolar
          </div>
        </div>
      </section>

      {/* 3. Nosso propósito */}
      <section className="section section-mist" aria-labelledby="proposito-titulo">
        <div className="wrap">
          <h2 className="section-title" id="proposito-titulo">Nosso propósito</h2>
          <ul className="proposito-grid">
            {SOBRE.proposito.map((p) => (
              <li key={p.titulo} className="proposito-item">
                <span className="proposito-icone" aria-hidden="true">{p.icone}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. O que você encontra no evento? */}
      <section className="section" aria-labelledby="encontra-titulo">
        <div className="wrap">
          <h2 className="section-title" id="encontra-titulo">O que você encontra no evento?</h2>
          <div className="card-grid">
            {SOBRE.experiencias.map((e) => (
              <article key={e.id} className="card">
                <div className={`card-media card-media-${e.variante}`} aria-hidden="true">
                  {e.titulo}
                </div>
                <div className="card-body">
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                  <Link className="btn" to={e.para}>{e.rotulo}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quem faz acontecer? */}
      <section className="section section-mist" aria-labelledby="quem-titulo">
        <div className="wrap">
          <Provisorio ativo={SOBRE.quem.provisorio} />
          <h2 className="section-title" id="quem-titulo">Quem faz acontecer?</h2>
          {SOBRE.quem.paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="quem-fotos">
            {Array.from({ length: SOBRE.quem.fotos }, (_, i) => (
              <div
                key={i}
                className="galeria-item"
                role="img"
                aria-label={`Espaço reservado para a foto dos bastidores ${i + 1}`}
              >
                Foto dos bastidores {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. O CEJLL Fest em números (só aparece com dados confirmados) */}
      {numeros.length > 0 && (
        <section className="numeros" aria-labelledby="numeros-titulo">
          <div className="wrap">
            <h2 id="numeros-titulo">O CEJLL Fest em números</h2>
            <dl className="numeros-grid">
              {numeros.map((n) => (
                <div key={n.id}>
                  <dd>{n.valor}</dd>
                  <dt>{n.rotulo}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* 8. Encerramento */}
      <section className="encerramento" aria-labelledby="encerramento-titulo">
        <div className="wrap">
          <h2 id="encerramento-titulo">Um espaço para criar, compartilhar e descobrir.</h2>
          <p>Explore o site e descubra como fazer parte.</p>
          <div className="encerramento-links">
            <Link className="btn" to="/participe">Participe</Link>
            <Link className="btn" to="/projetos">Projetos</Link>
            <Link className="btn" to="/programacao">Programação</Link>
            <Link className="btn" to="/mapa">Mapa</Link>
          </div>
        </div>
      </section>
    </>
  )
}
