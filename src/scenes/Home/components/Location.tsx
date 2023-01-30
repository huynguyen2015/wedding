import QueueAnim from 'rc-queue-anim'

interface IProps {
  dataSource: any
  isMobile: boolean
}

const Location = ({ dataSource }: IProps) => {
  // const [showInfo, setShowInfo] = useState(isMobile)

  const onClick = () => {
    window.open(dataSource.Content.children.url.children)
  }

  const markerEnter = () => {
    // setShowInfo(true)
  }

  const markerLeave = () => {
    // setShowInfo(false)
  }

  return (
    <section className="home-page-wrapper location-wrapper">
      <QueueAnim type="scale">
        <div
          className="section-title-wrapper"
          style={{ backgroundPosition: 'center -176px' }}>
          <div className="container">
            <h1 className="section-title black">Location</h1>
          </div>
          <div className="container map-info-container">
            <div
              className="info-wrapper animate-from-bottom animation-from-bottom"
              data-animation-direction="from-bottom"
              data-animation-delay="100">
              <div className="location-info">
                <div className="neela-style">
                  <span className="h-lines"></span>
                  <span className="v-lines"></span>
                  <h4 className="has-icon">
                    <i className="icon-big-church"></i>Ceremony
                    <small>03:00pm</small>
                  </h4>
                  <h5>Birchwood Church</h5>
                  <p>
                    4181 Birchwood Ave Seal Beach, CA
                    <br />
                    33.776825, -118.059113
                  </p>

                  <div className="info-map-divider"></div>

                  <h4 className="has-icon">
                    <i className="icon-champagne-glasses"></i>Reception
                    <small>05:30pm</small>
                  </h4>
                  <h5>Old Ranch Country Club</h5>
                  <p>
                    29033 West Lake Drive, Agoura Hills, CA
                    <br />
                    33.776025, -118.065314
                  </p>
                </div>
              </div>
            </div>

            <div
              className="map-wrapper animate-fade animation-fade"
              data-animation-direction="fade"
              data-animation-delay="100">
              <div
                id="map_canvas"
                className="icon-wrapper"
                onMouseEnter={markerEnter}
                onMouseLeave={markerLeave}
                onClick={onClick}
                onTouchEnd={onClick}>
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
