import { useState } from 'react'
import QueueAnim from 'rc-queue-anim'

interface IProps {
  dataSource: any
  isMobile: boolean
}

const Content10 = ({ dataSource, isMobile }: IProps) => {
  const [showInfo, setShowInfo] = useState(isMobile)

  const onClick = () => {
    window.open(dataSource.Content.children.url.children)
  }

  const markerEnter = () => {
    setShowInfo(true)
  }

  const markerLeave = () => {
    setShowInfo(false)
  }

  return (
    <div {...dataSource.wrapper}>
      <div
        {...dataSource.Content}
        onMouseEnter={markerEnter}
        onMouseLeave={markerLeave}
        onClick={onClick}
        onTouchEnd={onClick}>
        <div {...dataSource.Content.children.icon}>
          <img src={dataSource.Content.children.icon.children} alt="img" />
        </div>
        <div {...dataSource.Content.children.iconShadow}>
          <img
            src={dataSource.Content.children.iconShadow.children}
            alt="img"
          />
        </div>
      </div>
      <QueueAnim type="scale">
        {showInfo && (
          <div className="map-tip" key="map">
            <h2>{dataSource.Content.children.title.children}</h2>
            <p>{dataSource.Content.children.content.children}</p>
          </div>
        )}
      </QueueAnim>
    </div>
  )
}

export default Content10
