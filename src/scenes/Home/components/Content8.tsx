import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Row, Col } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { getChildrenToRender } from '../../../lib/utils'

interface IProps {
  dataSource: any
  isMobile: boolean
}

const Content8 = ({ dataSource, isMobile }: IProps) => {
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
      <TweenOne component={Col} animation={liAnim} key={i.toString()} {...item}>
        <div {...children}>
          <div className="image-wrapper" {...children.img}>
            <img src={children.img.children} alt="img" />
          </div>
          <h2 {...children.title}>{children.title.children}</h2>
          <div {...children.content}>{children.content.children}</div>
        </div>
      </TweenOne>
    )
  }

  const children = dataSource.block.children.map(getBlockChildren)
  return (
    <div {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim type="bottom" key="img">
            <Row {...dataSource.block} key="img">
              {children}
            </Row>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  )
}

export default Content8
