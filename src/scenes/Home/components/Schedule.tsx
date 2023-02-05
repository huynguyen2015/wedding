import { enquireScreen } from 'enquire-js'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'

let isMobile = false
enquireScreen((b) => {
  isMobile = b
})
const dataSource = [
  {
    name: 'block0',
    playScale: 0.3,
    children: {
      img: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
      },
      icon: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg'
      },
      name: { children: 'Đón khách tại' },
      post: { children: 'Thảo điền' },
      time: { children: '09:00 - 10:00' },
      title: {
        children: 'Dự kiến di chuyển 30p'
      },
      content: { children: '' }
    }
  },
  {
    name: 'block1',
    playScale: 0.3,
    children: {
      img: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
      },
      icon: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg'
      },
      name: { children: 'Đón khách tại' },
      post: { children: 'An sương' },
      time: { children: '09:00 - 10:00' },
      title: { children: 'Dự kiến di chuyển 30' },
      content: {
        children: 'Tập trung bạn bè và người thân và bắt đầu di chuyển'
      }
    }
  },
  {
    name: 'block2',
    playScale: 0.3,
    children: {
      img: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
      },
      icon: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg'
      },
      name: { children: 'Đến nơi' },
      post: { children: 'Mời khách vào dự tiệc' },
      time: { children: '09:00 - 10:00' },
      title: {
        children: 'Dự kiến tiệc diễn ra trong 2h'
      },
      content: {
        children: 'Cảm ơn'
      }
    }
  },
  {
    name: 'block3',

    playScale: 0.3,
    children: {
      img: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png'
      },
      icon: {
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg'
      },
      name: { children: 'Di chuyển về' },
      post: {
        children: 'Lần lượt ghé qua các trạm đã dừng trước đó'
      },
      time: { children: '09:00 - 10:00' },
      title: { children: 'Khách xuống xe' },
      content: {
        children: 'Xin chân thành cám ơn'
      }
    }
  }
]

const Gallery = () => {
  const getBlockChildren = (block, i) => {
    const item = block.children
    const textWrapper = (
      <QueueAnim
        key="text"
        leaveReverse
        delay={isMobile ? [0, 100] : 0}
        className="text-wrapper">
        <div key="time" className="block-time">
          {item.time.children}
        </div>
        <h2 key="title" className="block-title">
          <i className="block-icon">
            <img src={item.icon.children} alt="img" />
          </i>
          {item.title.children}
        </h2>
        <div key="p" className="block-content">
          {item.content.children}
        </div>
      </QueueAnim>
    )
    return (
      <OverPack key={i.toString()} className="block-wrapper">
        {isMobile && textWrapper}
        <QueueAnim
          className="image-wrapper"
          key="image"
          type={isMobile ? 'right' : 'bottom'}
          leaveReverse
          delay={isMobile ? [100, 0] : 0}>
          <div key="image" className="block-img">
            <img src={item.img.children} alt="img" />
          </div>
          <div key="name" className="name-wrapper">
            <div key="name" className="block-name">
              {item.name.children}
            </div>
            <div key="post" className="block-post">
              {item.post.children}
            </div>
          </div>
        </QueueAnim>

        {!isMobile && textWrapper}
      </OverPack>
    )
  }

  const children = dataSource.map(getBlockChildren)
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
