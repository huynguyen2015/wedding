import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
interface IProps {
  dataSource: any
  isMobile: boolean
}

const Gallery = ({ dataSource, isMobile }: IProps) => {
  const getBlockChildren = (block, i) => {
    const item = block.children
    const textWrapper = (
      <QueueAnim
        key="text"
        leaveReverse
        delay={isMobile ? [0, 100] : 0}
        {...item.textWrapper}>
        <div key="time" {...item.time}>
          {item.time.children}
        </div>
        <h2 key="title" {...item.title}>
          <i {...item.icon}>
            <img src={item.icon.children} alt="img" />
          </i>
          {item.title.children}
        </h2>
        <div key="p" {...item.content}>
          {item.content.children}
        </div>
      </QueueAnim>
    )
    return (
      <OverPack key={i.toString()} {...block}>
        {isMobile && textWrapper}
        <QueueAnim
          className="image-wrapper"
          key="image"
          type={isMobile ? 'right' : 'bottom'}
          leaveReverse
          delay={isMobile ? [100, 0] : 0}
          {...item.imgWrapper}>
          <div key="image" {...item.img}>
            <img src={item.img.children} alt="img" />
          </div>
          <div key="name" className="name-wrapper">
            <div key="name" {...item.name}>
              {item.name.children}
            </div>
            <div key="post" {...item.post}>
              {item.post.children}
            </div>
          </div>
        </QueueAnim>

        {!isMobile && textWrapper}
      </OverPack>
    )
  }

  const children = dataSource.block.children.map(getBlockChildren)
  return (
    <section id="schedule" className="schedule-wrapper home-page-wrapper">
      <div className="section-title-wrapper">
        <div className="container">
          <h1 className="section-title black">Lịch trình di chuyển</h1>
        </div>
      </div>
      <div className="schedule">
        <div className="timeline">{children}</div>
      </div>
    </section>
  )
}

export default Gallery
