const Invitation = () => {
  return (
    <section id="invitation">
      <div
        className="section-title-wrapper parallax-background bg-color-overlay section-divider-bottom-2 padding-divider-top"
        style={{ backgroundPosition: 'center -176px' }}>
        <div className="section-divider-top-1 off-section"></div>
        <div className="container">
          <h1 className="section-title light">Invitation</h1>
          <div className="invitation-content-wrapper">
            <div
              className="invite neela-style animate-from-left animation-from-left"
              data-animation-direction="from-left"
              data-animation-delay="100">
              <span className="h-lines"></span>
              <span className="v-lines"></span>
              <div className="invite_title">
                <div className="text">
                  Save<small>the</small>Date
                </div>
              </div>

              <div className="invite_info">
                <h2>
                  Isabella <small>&amp;</small> Andrew
                </h2>

                <div className="uppercase">
                  Request the honor of your presence on their wedding day
                </div>
                <div className="date">
                  September 24, 2022<small>at 03:00 pm</small>
                </div>
                <div className="uppercase">
                  <div style={{ lineHeight: 'normal' }}>
                    At Birchwood Church
                  </div>
                  4181 Birchwood Ave Seal Beach, CA
                </div>

                <h5>Reception to follow</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invitation
