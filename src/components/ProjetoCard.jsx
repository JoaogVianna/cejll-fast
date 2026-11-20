import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ProjetoCard.css'

export default function ProjetoCard({ projeto: p, variante }) {
  const { imagens } = p

  return (
    <article className="card proj-card">
      <div
        className="proj-media"
        role="group"
        aria-roledescription="carrossel"
        aria-label={`Imagens do projeto ${p.nome}`}
      >
        {imagens.length > 1 ? (
          // 2 ou mais imagens: carrossel próprio deste cartão (cada um é independente)
          <Swiper
            className="proj-swiper"
            modules={[Navigation, Pagination, Keyboard, A11y]}
            navigation
            pagination={{ type: 'fraction' }}
            keyboard={{ enabled: true }}
            a11y={{ prevSlideMessage: 'Imagem anterior', nextSlideMessage: 'Próxima imagem' }}
          >
            {imagens.map((img) => (
              <SwiperSlide key={img.src}>
                <img className="proj-img" src={img.src} alt={img.alt} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : imagens.length === 1 ? (
          // 1 imagem: sem controles
          <img className="proj-img" src={imagens[0].src} alt={imagens[0].alt} loading="lazy" />
        ) : (
          // nenhuma imagem: espaço reservado
          <div className={`card-media card-media-${variante}`} aria-hidden="true">
            {p.categoria}
          </div>
        )}
      </div>

      <div className="card-body">
        {p.exemplo && <span className="tag">Exemplo</span>}
        <span className="card-meta">{p.categoria}</span>
        <h3>{p.nome}</h3>
        <p>{p.resumo}</p>
        <Link className="btn" to={`/projetos/${p.id}`}>
          Ver projeto<span className="visually-hidden"> {p.nome}</span>
        </Link>
      </div>
    </article>
  )
}
