import Banner from './components/Banner'
import './index.less'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Schedule from './components/Schedule'
import Confirmation from './components/Confirmation'
import Invitation from './components/Invitation'

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Gallery />
      <Invitation />
      <Location />
      <Schedule />
      <Confirmation />
    </>
  )
}

export default Home
