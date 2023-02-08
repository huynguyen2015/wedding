const Invitation = () => {
  return (
    <section id="invitation">
      <div
        className="section-title-wrapper parallax-background bg-color-overlay section-divider-bottom-2 padding-divider-top"
        style={{ backgroundPosition: 'center -176px' }}>
        <div className="section-divider-top-1 off-section"></div>
        <div className="container">
          <h1 className="section-title light">Thiệp mời</h1>
          <div className="invitation-content-wrapper">
            <div
              className="invite border-effect animate-from-left animation-from-left"
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
                  Quốc Huy <small>&amp;</small> Quỳnh Hoa
                </h2>

                <div className="uppercase">
                  Sự hiện diện của các bạn là niềm vinh hạnh của chúng tôi
                </div>
                <div className="date">
                  Tháng ba 12, 2023<small>lúc 11:00 sáng</small>
                </div>
                <div className="uppercase">
                  <div style={{ lineHeight: 'normal' }}>
                    Cẩm Giang, Cẩm Thắng, Tây Ninh
                  </div>
                </div>

                <h5>Tham dự với chúng tôi</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Invitation
