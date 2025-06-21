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
                  Ngọc Hưng <small>&amp;</small> Phương Nhi
                </h2>

                <div className="uppercase">
                  Sự hiện diện của quý khách là niềm vinh hạnh của chúng tôi
                </div>
                <div className="date">
                  12 Tháng Bảy, 2025<small>lúc 11:00 sáng</small>
                </div>
                <div className="uppercase">
                  <div style={{ lineHeight: 'normal' }}>
                    kiệt 09, Khu phố Đại Áng, Phường Đông Lương, Tp Đông Hà,
                    Quảng Trị
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
