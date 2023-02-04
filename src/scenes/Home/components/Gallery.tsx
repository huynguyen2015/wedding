import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Row, Col } from 'antd'
import QueueAnim from 'rc-queue-anim'

interface IProps {
  dataSource: any
  isMobile: boolean
}

const Schedule = ({ dataSource, isMobile }: IProps) => {
  const getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100

  const getBlockChildren = (item, i) => {
    const children = item.children
    const delay = isMobile ? i * 50 : getDelay(i, 24 / item.md)
    const liAnim = {
      y: 30,
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad',
      delay
    }
    return (
      <TweenOne
        component={Col}
        animation={liAnim}
        key={i.toString()}
        {...item}
        className="gallery-block-wrapper">
        <div className="gallery-block">
          <div className="image-wrapper gallery-img">
            <img src={children.img.children} alt="img" />
          </div>
        </div>
      </TweenOne>
    )
  }
  const children = dataSource.block.children.map(getBlockChildren)
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
              <Row className="content-wrapper" key="img">
                {children}
              </Row>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    </section>
  )
}

export default Schedule
