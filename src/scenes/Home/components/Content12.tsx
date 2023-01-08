import { Row, Col } from 'antd'
import { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { getChildrenToRender } from '../../../lib/utils'

interface IProps {
  dataSource: any
  className?: string
}

const Content12 = ({ dataSource, className }: IProps) => {
  const getChildrenToRenderLocal = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item}>
          <div {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.img.children} alt="img" />
            </span>
          </div>
        </Col>
      )
    })

  const childrenToRender = getChildrenToRenderLocal(dataSource.block.children)
  return (
    <div {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        <OverPack
          className={`content-template ${className}`}
          {...dataSource.OverPack}>
          <TweenOneGroup
            component={Row}
            key="ul"
            enter={{
              y: '+=30',
              opacity: 0,
              type: 'from',
              ease: 'easeOutQuad'
            }}
            leave={{ y: '+=30', opacity: 0, ease: 'easeOutQuad' }}
            {...dataSource.block}>
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    </div>
  )
}

export default Content12
