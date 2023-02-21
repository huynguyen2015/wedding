import { useState } from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { enquireScreen } from 'enquire-js'
import QueueAnim from 'rc-queue-anim'
import Lightbox from 'react-image-lightbox'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-image-lightbox/style.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

let isMobile = false
enquireScreen((b) => {
  isMobile = b
})
const getImages = () => {
  const temp = Array.from(Array(41).keys())
  return temp
    .filter(
      (i) =>
        ![
          1, 2, 3, 4, 5, 7, 9, 10, 12, 15, 17, 19, 21, 22, 25, 29, 18, 11, 23,
          32, 33, 13, 30, 34, 35, 36, 37, 38, 39, 40, 14
        ].includes(i)
    )
    .map((i) => `/assets/images/gallery/${i}.jpg`)
    .reverse()
}
const images = getImages()

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100

  const getBlockChildren = (imgSrc, i) => {
    const delay = isMobile ? i * 50 : getDelay(i, 24 / 6)
    const liAnim = {
      y: 30,
      opacity: 0,
      type: 'from' as const,
      ease: 'easeOutQuad' as const,
      delay
    }
    return (
      <TweenOne
        animation={liAnim}
        className="gallery-block-wrapper"
        key={i.toString()}>
        <LazyLoadImage
          src={imgSrc}
          alt="img"
          onClick={() => {
            setPhotoIndex(i)
            setIsOpen(true)
          }}
          className="image-wrapper gallery-img"
          loading="lazy"
          effect="blur"
        />
      </TweenOne>
    )
  }
  const children = images.map(getBlockChildren)
  return (
    <section id="gallery" className="home-page-wrapper gallery-wrapper">
      <div
        className="section-title-wrapper parallax-background bg-color-overlay section-divider-bottom-2 padding-divider-top"
        style={{ backgroundPosition: 'center -176px' }}>
        <div className="section-divider-top-1 off-section"></div>
        <div className="container">
          <h1 className="section-title light">Hình cưới</h1>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-content">
          <OverPack playScale="0.3">
            <QueueAnim type="bottom" key="img">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 500: 10, 750: 2, 900: 3, 1200: 4 }}>
                <Masonry>{children}</Masonry>
              </ResponsiveMasonry>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  )
}

export default Gallery
