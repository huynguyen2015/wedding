import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import 'rc-texty/assets/index.css'
import { Link } from 'rc-scroll-anim'

const Banner = () => {
  return (
    <QueueAnim
      type={['bottom', 'top']}
      delay={200}
      id="banner"
      className="bg-slideshow section-divider-bottom-1 zs-enabled overlay-plain">
      <div className="zs-slideshow">
        <div className="zs-slides">
          <div className="zs-slide zs-slide-2 active"></div>
        </div>
      </div>
      <div
        className="banner-info"
        style={{ zIndex: 2, marginTop: '19.4415px' }}>
        <div className="info-wrapper v-center">
          <h2
            data-animation-direction="fade"
            data-animation-delay="600"
            className="animate-fade animation-fade">
            Save the Date
          </h2>

          <h1 className="info-title light">
            <span
              data-animation-direction="from-right"
              data-animation-delay="300"
              className="animate-from-right animation-from-right">
              Ngọc Hưng
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
              Phương Nhi
            </span>
          </h1>

          <div
            className="info-subtitle light animate-fade animation-fade"
            data-animation-direction="fade"
            data-animation-delay="1000">
            Tháng 7 <span>12</span> 2025
          </div>

          <div
            data-animation-direction="fade"
            data-animation-delay="1000"
            className="animate-fade animation-fade">
            <TweenOne
              animation={{
                height: 0,
                duration: 300,
                onComplete: (e) => {
                  e.target.style.height = 'auto'
                },
                ease: 'easeInOutQuad'
              }}
              moment={300}>
              <Link className="btn btn-light scrollto" to="confirmation">
                <span className="h-lines"></span>
                <span className="v-lines"></span>Tham dự nhé bạn
              </Link>
            </TweenOne>
          </div>
        </div>
      </div>
    </QueueAnim>
  )
}
export default Banner
