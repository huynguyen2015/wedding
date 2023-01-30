import QueueAnim from 'rc-queue-anim'
import 'rc-texty/assets/index.css'

const Banner = () => {
  const children = (
    <section
      className="bg-slideshow section-divider-bottom-1 zs-enabled overlay-plain"
      style={{ minHeight: '844px' }}>
      <div className="zs-slideshow">
        <div className="zs-slides">
          <div className="zs-slide zs-slide-2 active"></div>
        </div>
      </div>
      <div
        className="banner-info"
        style={{ zIndex: 2, marginTop: '19.4415px' }}>
        <div className="hero-wrapper v-center">
          <h2
            data-animation-direction="fade"
            data-animation-delay="600"
            className="animate-fade animation-fade">
            Save the Date
          </h2>

          <h1 className="hero-title light">
            <span
              data-animation-direction="from-right"
              data-animation-delay="300"
              className="animate-from-right animation-from-right">
              Isabella
            </span>
            <small
              data-animation-direction="from-top"
              data-animation-delay="300"
              className="animate-from-top animation-from-top">
              &amp;
            </small>
            <span
              data-animation-direction="from-left"
              data-animation-delay="300"
              className="animate-from-left animation-from-left">
              Andrew
            </span>
          </h1>

          <div
            className="hero-subtitle light animate-fade animation-fade"
            data-animation-direction="fade"
            data-animation-delay="1000">
            SEPT <span>24</span> 2022
          </div>

          <div
            data-animation-direction="fade"
            data-animation-delay="1000"
            className="animate-fade animation-fade">
            <a
              href="https://www.wiselythemes.com/html/neela/index.html#rsvp"
              className="btn btn-light scrollto"
              style={{ width: '119px' }}>
              <span className="h-lines"></span>
              <span className="v-lines"></span>RSVP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
  return (
    <section id="introduce">
      <QueueAnim type={['bottom', 'top']} delay={200}>
        {children}
      </QueueAnim>
    </section>
  )
}
export default Banner
