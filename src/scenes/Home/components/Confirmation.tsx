import QueueAnim from 'rc-queue-anim'

const Confirmation = () => {
  return (
    <section id="confirmation" className="confirmation-wrapper">
      <div className="section-title-wrapper">
        <div className="container">
          <h1 className="section-title black">Xác nhận tham dự</h1>
        </div>
        <div className="container confirmation">
          <QueueAnim type="bottom" key="img">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSehKkrrigOlgWzPuiiIB8F052ITyJZ8L5p1eM65ELL90dFMgA/viewform?embedded=true"
              width="700"
              height="600"
              style={{ border: '0' }}>
              Loading…
            </iframe>
          </QueueAnim>
        </div>
      </div>
    </section>
  )
}

export default Confirmation
