import QueueAnim from 'rc-queue-anim'

const Location = () => {
  return (
    <section id="location" className="home-page-wrapper location-wrapper">
      <QueueAnim type="scale">
        <div
          className="section-title-wrapper"
          style={{ backgroundPosition: 'center -176px' }}>
          <div className="container">
            <h1 className="section-title black">Hôn lễ được cử hành tại</h1>
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
                      vào lúc 11:00 am 12/03/2023 <br /> tại
                    </small>
                  </h4>
                  <h5>Cẩm Thắng, Gò Dầu, tỉnh Tây Ninh</h5>
                  <p>Chợ Cẩm Giang, Tây Ninh</p>

                  <div className="info-map-divider"></div>

                  <h4 className="has-icon">
                    <i className="icon-champagne-glasses"></i>Nhà trai
                    <small>
                      vào lúc 11:00 am 25/03/2023 <br /> tại
                    </small>
                  </h4>
                  <h5>Khách sạn Mekong, Đông Hà, Quảng Trị</h5>
                  <p>Lê Duẩn, Đông Hà, Quảng Trị</p>
                </div>
              </div>
            </div>

            <div
              className="map-wrapper animate-fade animation-fade"
              data-animation-direction="fade"
              data-animation-delay="100">
              <div id="map_canvas" className="icon-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.7207002771497!2d106.14850235073787!3d11.208288654098412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b158392d54377%3A0x34bfba3e44bdd8fc!2sCam%20Giang%20Market!5e0!3m2!1sen!2s!4v1674917607655!5m2!1sen!2s"
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
