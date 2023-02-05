import QueueAnim from 'rc-queue-anim'
import { enquireScreen } from 'enquire-js'

let isMobile = false
enquireScreen((b) => {
  isMobile = b
})

const Confirmation = () => {
  return (
    <section id="confirmation" className="confirmation-wrapper">
      <div className="section-title-wrapper">
        <div className="container">
          <h1 className="section-title black">
            Giúp Cô dâu & Chú rể chuẩn bị được chu đáo hơn
          </h1>
        </div>
        <div className="container confirmation">
          <QueueAnim type="bottom" key="img">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdoIICDSY1DPGKO6zQbY7GG6En8807uAsR1snL4zCstp1xW4w/viewform?embedded=true"
              width="700"
              height={isMobile ? 3000 : 2000}
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
