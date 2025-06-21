import Banner from './components/Banner'
import './index.less'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Location from './components/Location'
// import Schedule from './components/Schedule'
// import Confirmation from './components/Confirmation'
import Invitation from './components/Invitation'
import { enquireScreen } from 'enquire-js'
import CarouselGallery from './components/Carousel'

let isMobile = false
enquireScreen((b) => {
  isMobile = b
})

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      {isMobile ? <CarouselGallery></CarouselGallery> : <Gallery />}
      <Invitation />
      <Location />
      {/* <Schedule /> */}
      {/* <Confirmation /> */}
    </>
  )
}

export default Home
