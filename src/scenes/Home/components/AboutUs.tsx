import QueueAnim from 'rc-queue-anim'

const AboutUs = () => {
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
                <small>Chúng tôi</small>Kết hôn
              </h3>
              <p>
                Hôm nay, mãi mãi và cả ngày mai, anh cần em bên cạnh, luôn là
                người bạn thân nhất, người tình và mãi mãi là tri kỉ
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

export default AboutUs
