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
      name: { children: 'Lưu ý' },
      post: {
        children: 'Giúp cô dâu & chú rể đến sớm tí nhé'
      },
      time: { children: '08:30 - 09:00' },
      title: {
        children: 'Tập trung & đón khách'
      },
      content: {
        children:
          'Dự kiến đón khách tại Quận 2, Quận 3 và Tân Bình (Xem chi tiết ở phía dưới)'
      }
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
      name: { children: 'Di chuyển' },
      post: { children: 'Cùng trò chuyện, hát hò hay chơi trò chơi' },
      time: { children: '09:00 - 11:00' },
      title: { children: 'Dự kiến di chuyển' },
      content: {
        children:
          'Điểm đến là nhà cô dâu, dự kiến di chuyển khoảng 2 tiếng. Khoảng thời gian này sẽ thật thú vị nêu có tiếng cười của các bạn trên xe'
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
      post: { children: 'Mời khách vào dự tiệc chung vui' },
      time: { children: '11:00 - 13:00' },
      title: {
        children: 'Dự kiến tiệc chung vui'
      },
      content: {
        children:
          'Cô dâu & Chú rể đón khách, chụp hình lưu niệm và mời khách vào dự tiệc'
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
        children: 'Cám ơn các bạn đã dành thời gian dự tiệc chung vui'
      },
      time: { children: '13:00 - 15:00' },
      title: { children: 'Di chuyển về Tp HCM' },
      content: {
        children:
          'Xe lần lượt trả khách tại các địa điểm trước đó. Chưa bao giờ cô dâu & chú rể ý thức được câu nói "Sự hiện diện của quý khách là niềm vinh dự của chúng tôi" đến như vậy. Một lần nữa xin chân thành cám ơn'
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
