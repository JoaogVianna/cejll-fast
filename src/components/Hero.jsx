import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules'
import { BANNERS } from '../data/banners'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Hero.css'
import './HeroBanners.css'

export default function Hero() {
  // quem prefere menos movimento não recebe o carrossel passando sozinho
  const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const swiperRef = useRef(null)
  const [tocando, setTocando] = useState(!reduzirMovimento)

  const alternarTroca = () => {
    const autoplay = swiperRef.current?.autoplay
    if (!autoplay) return
    if (tocando) autoplay.stop()
    else autoplay.start()
  }

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
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onAutoplayStart={() => setTocando(true)}
        onAutoplayStop={() => setTocando(false)}
        a11y={{
          prevSlideMessage: 'Banner anterior',
          nextSlideMessage: 'Próximo banner',
          paginationBulletMessage: 'Ir para o banner {{index}}',
        }}
      >
        {BANNERS.map((b, i) => {
          // só o primeiro banner usa <h1>; a página precisa de um único h1
          const Titulo = i === 0 ? 'h1' : 'h2'
          return (
            <SwiperSlide
              key={b.id}
              className={`slide slide-${b.variante}${b.imagem ? ' slide-com-imagem' : ''}`}
              style={
                b.imagem
                  ? {
                      backgroundImage: `linear-gradient(90deg, rgba(32,42,68,0.88), rgba(32,42,68,0.4)), url(${b.imagem})`,
                    }
                  : undefined
              }
            >
              <div className="slide-inner">
                <Titulo>{b.titulo}</Titulo>
                <p className="slide-tagline">{b.frase}</p>
                {b.data && <p className="slide-date">{b.data}</p>}
                {b.botao && (
                  <Link className="btn" to={b.botao.para}>
                    {b.botao.rotulo}
                  </Link>
                )}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {!reduzirMovimento && (
        <button type="button" className="hero-pausa" onClick={alternarTroca}>
          <span aria-hidden="true">{tocando ? '❚❚' : '▶'}</span>{' '}
          {tocando ? 'Pausar troca automática' : 'Retomar troca automática'}
        </button>
      )}
    </section>
  )
}
