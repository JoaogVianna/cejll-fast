import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Hero.css'

export default function Hero() {
  // quem prefere menos movimento não recebe o carrossel passando sozinho
  const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section className="hero" aria-label="Destaques do evento">
      <Swiper
        className="hero-swiper"
        modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
        loop
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={
          reduzirMovimento
            ? false
            : { delay: 6500, pauseOnMouseEnter: true, disableOnInteraction: true }
        }
        a11y={{
          prevSlideMessage: 'Banner anterior',
          nextSlideMessage: 'Próximo banner',
          paginationBulletMessage: 'Ir para o banner {{index}}',
        }}
      >
        <SwiperSlide className="slide slide-a">
          <div className="slide-inner">
            <h1>CEJLL Fest</h1>
            <p className="slide-tagline">Evento feito de alunos para alunos</p>
            <p className="slide-date">Data a definir</p>
            <Link className="btn" to="/participe">Participe</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide slide-b">
          <div className="slide-inner">
            <div className="placeholder-box">Banner 2 — placeholder</div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide slide-c">
          <div className="slide-inner">
            <div className="placeholder-box">Banner 3 — placeholder</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
