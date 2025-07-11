import { useState } from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import { Carousel } from 'antd'
import Lightbox from 'react-image-lightbox'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-image-lightbox/style.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

const getImages = () => {
  return [0, 1, 4, 6, 7, 8, 12, 16, 17]
    .map((i) => `/assets/images/gallery/${i}.jpg`)
    .reverse()
}
const images = getImages()

const CarouselGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const getBlockChildren = (imgSrc, i) => {
    return (
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
        <div className="gallery-content carousel">
          <OverPack playScale="0.3">
            <QueueAnim type="bottom" key="img">
              <Carousel effect="fade" autoplay>
                {(children || []).map((item, index) => {
                  return <div key={index}>{item}</div>
                })}
              </Carousel>
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

export default CarouselGallery
