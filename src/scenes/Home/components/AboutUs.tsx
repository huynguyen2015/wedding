// import TweenOne from &apos;rc-tween-one&apos;
// import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
// import { Col } from &apos;antd&apos;
import QueueAnim from 'rc-queue-anim'
// import { getChildrenToRender } from &apos;../../../lib/utils&apos;

// interface IProps {
//   dataSource: any
//   isMobile: boolean
// }

const AboutUs = () => {
  // const getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100

  // const getBlockChildren = (item, i) => {
  //   const children = item.children
  //   const delay = isMobile ? i * 50 : getDelay(i, 24 / item.md)
  //   const liAnim = {
  //     y: 30,
  //     opacity: 0,
  //     type: &apos;from&apos;,
  //     ease: &apos;easeOutQuad&apos;,
  //     delay
  //   }
  //   return (
  //     <TweenOne component={Col} animation={liAnim} key={i.toString()} {...item}>
  //       <div {...children}>
  //         <div className="image-wrapper" {...children.img}>
  //           <img src={children.img.children} alt="img" />
  //         </div>
  //         <h2 {...children.title}>{children.title.children}</h2>
  //         <div {...children.content}>{children.content.children}</div>
  //       </div>
  //     </TweenOne>
  //   )
  // }

  // const children = dataSource.block.children.map(getBlockChildren)
  return (
    <section id="about-us">
      <QueueAnim delay={300} type="bottom">
        <div className="container">
          <div className="about-wrapper">
            <div
              className="element col-md-6 col-xl-4 offset-xl-2 animate-from-left animation-from-left"
              data-animation-direction="from-left"
              data-animation-delay="300">
              <div className="image">
                <img src="./assets/images/groom.jpg" />
                <div className="hover-info neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div className="content">
                    <h3>
                      Andrew Miller<small>The Groom</small>
                    </h3>
                    <p>
                      I am so incredibly blessed and excited to spend everyday
                      for the rest of my life with my best friend!
                    </p>
                    <ul className="sn-icons">
                      <li>
                        <a href="https://www.wiselythemes.com/html/neela/index.html#">
                          <i className="fab fa-instagram-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.wiselythemes.com/html/neela/index.html#">
                          <i className="fab fa-twitter-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.wiselythemes.com/html/neela/index.html#">
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="divider-about-us animate-fade animation-fade"
              data-animation-direction="fade"
              data-animation-delay="500">
              <i className="icon-two-hearts"></i>
            </div>

            <div
              className="element col-md-6 col-xl-4 animate-from-right animation-from-right"
              data-animation-direction="from-right"
              data-animation-delay="400">
              <div className="image">
                <img src="./assets/images/bride.jpg" />
                <div className="hover-info neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <div className="content">
                    <h3>
                      Isabella Walker<small>The Bride</small>
                    </h3>
                    <p>
                      She&apos;s everything I&apos;ve always dreamed of and
                      I&apos;m so excited to spend the rest of my life with her!
                    </p>
                    <ul className="sn-icons">
                      <li>
                        <a href="https://www.wiselythemes.com/html/neela/index.html#">
                          <i className="fab fa-instagram-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.wiselythemes.com/html/neela/index.html#">
                          <i className="fab fa-twitter-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.wiselythemes.com/html/neela/index.html#">
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-us-desc-wrapper">
            <div
              className="about-us-desc col-lg-8 offset-lg-2 animate-from-bottom animation-from-bottom"
              data-animation-direction="from-bottom"
              data-animation-delay="300">
              <h3>
                <small>We are</small>Getting Married
              </h3>
              <p>
                Today and always, beyond tomorrow, I need you beside me, always
                as my best friend, lover and forever soul mate. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                porttitor venenatis. Vestibulum sit amet est nisl. Vestibulum
                iaculis finibus sem nec condimentum. Quisque nulla orci, aliquet
                sit amet sem eget, pellentesque euismod enim. Aenean quis nisl
                at est consequat elementum sed vel turpis. Phasellus dignissim
                sit amet orci vitae mattis. Phasellus a imperdiet ligula,
                efficitur dignissim ex. Mauris placerat aliquet sem commodo
                molestie.
              </p>
              <img
                src="./Neela - Responsive One_Multi-Page Wedding HTML5 Template_files/signature-2.png"
                alt="Andrew and Isabella"
              />
            </div>
          </div>
        </div>
      </QueueAnim>
    </section>
  )
}

{
  /* <div {...dataSource.wrapper}>
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
</div> */
}

export default AboutUs
