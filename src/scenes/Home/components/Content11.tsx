import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import { Button } from 'antd'
import { getChildrenToRender } from '../../../lib/utils'

interface IProps {
  dataSource: any
  isMobile?: boolean
}

const Content11 = ({ dataSource }: IProps) => {
  return (
    <OverPack {...dataSource.OverPack}>
      <QueueAnim
        type="bottom"
        leaveReverse
        key="page"
        delay={[0, 100]}
        {...dataSource.titleWrapper}>
        {dataSource.titleWrapper.children.map(getChildrenToRender)}
      </QueueAnim>
      <TweenOne
        key="button"
        style={{ textAlign: 'center' }}
        {...dataSource.button}
        animation={{ y: 30, opacity: 0, type: 'from', delay: 300 }}>
        <Button {...dataSource.button.children.a}>
          {dataSource.button.children.a.children}
        </Button>
      </TweenOne>
    </OverPack>
  )
}

export default Content11
