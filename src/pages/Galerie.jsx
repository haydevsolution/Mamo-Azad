import { useState, useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Bild1 from '../assets/Bild1.jpeg'
import Bild2 from '../assets/Bild2.jpeg'
import Bild3 from '../assets/Bild3.jpeg'
import Bild4 from '../assets/Bild4.jpeg'
import Bild5 from '../assets/Bild5.jpeg'
import Bild6 from '../assets/Bild6.jpeg'
import Bild7 from '../assets/Bild7.jpeg'
import Bild8 from '../assets/Bild8.jpeg'
import Bild9 from '../assets/Bild9.jpeg'
import Bild10 from '../assets/Bild10.jpeg'
import Bild11 from '../assets/Bild11.jpeg'
import Bild12 from '../assets/Bild12.jpeg'

const images = [
  Bild1, Bild2, Bild3, Bild4,
  Bild5, Bild6, Bild7, Bild8,
  Bild9, Bild10, Bild11, Bild12,
]

function Galerie() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [animationKey, setAnimationKey] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const isLightboxOpen = lightboxIndex !== null

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setAnimationKey((prev) => prev + 1)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setAnimationKey((prev) => prev + 1)
  }, [])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setAnimationKey((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (!isLightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isLightboxOpen, goToPrev, goToNext])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeLightbox()
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Unsere Arbeiten</h1>
          <p>Einblicke in unsere professionelle Arbeit</p>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={src} alt={`Arbeit ${index + 1}`} loading="lazy" />
                <div className="gallery-item-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="lightbox"
          onClick={handleBackdropClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>

          <button className="lightbox-nav prev" onClick={goToPrev}>
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox-content">
            <img
              key={animationKey}
              className="lightbox-image"
              src={images[lightboxIndex]}
              alt={`Arbeit ${lightboxIndex + 1}`}
            />
          </div>

          <button className="lightbox-nav next" onClick={goToNext}>
            <ChevronRight size={28} />
          </button>

          <div className="lightbox-counter">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

export default Galerie
