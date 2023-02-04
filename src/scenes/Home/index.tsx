import Banner from './components/Banner'
import './index.less'
import {
  Content100DataSource,
  Content80DataSource,
  Content90DataSource
} from '../../lib/data.source'
import AboutUs from './components/AboutUs'
import Schedule from './components/Gallery'
import Location from './components/Location'
import Gallery from './components/Schedule'
import Confirmation from './components/Confirmation'
import Invitation from './components/Invitation'

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Schedule dataSource={Content80DataSource} isMobile={false} />
      <Invitation />
      <Location
        key="Content10_0"
        dataSource={Content100DataSource}
        isMobile={false}
      />
      <Gallery
        key="Content8_0"
        dataSource={Content90DataSource}
        isMobile={false}
      />
      <Confirmation />
    </>
  )
}

export default Home
