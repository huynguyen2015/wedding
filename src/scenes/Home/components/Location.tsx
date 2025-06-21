import QueueAnim from 'rc-queue-anim'

const Location = () => {
  return (
    <section id="location" className="home-page-wrapper location-wrapper">
      <QueueAnim type="scale">
        <div
          className="section-title-wrapper"
          style={{ backgroundPosition: 'center -176px' }}>
          <div className="container">
            <h1 className="section-title black">Hôn lễ cử hành tại tư gia</h1>
          </div>
          <div className="container map-info-container">
            <div
              className="info-wrapper animate-from-bottom animation-from-bottom"
              data-animation-direction="from-bottom"
              data-animation-delay="100">
              <div className="location-info">
                <div className="border-effect">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <h4 className="has-icon">
                    <i className="icon-big-church"></i>Nhà gái
                    <small>
                      vào lúc 10h30 ngày 11/07/2025 <br /> tại
                    </small>
                  </h4>
                  <h5>Thôn Văn Quỹ, Xã Hải Phong, Huyện Hải Lăng, Quảng Trị</h5>

                  <div className="info-map-divider"></div>

                  <h4 className="has-icon">
                    <i className="icon-champagne-glasses"></i>Nhà trai
                    <small>
                      Vào lúc 11h00 ngày 12/07/2025 <br /> tại
                    </small>
                  </h4>
                  <h5>
                    Kiệt 09, khu phố Đại Áng, Phường Đông Lương, Tp Đông Hà,
                    Quảng Trị
                  </h5>
                </div>
              </div>
            </div>

            <div
              className="map-wrapper animate-fade animation-fade"
              data-animation-direction="fade"
              data-animation-delay="100">
              <div id="map_canvas" className="icon-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.8801104527499!2d107.12061342845121!3d16.80051809899521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e5992f3f2227%3A0xe994c1e4f722e305!2zxJDDtG5nIEzGsMahbmcsIMSQw7RuZyBI4bqjaSwgRG9uZyBIYSwgUXXhuqNuZyBUcuG7iywgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1750489627767!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    </section>
  )
}

export default Location
