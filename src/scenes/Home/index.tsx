import Banner from './components/Banner3'
import './index.less'
import {
  Banner30DataSource,
  Content100DataSource,
  Content110DataSource,
  Content120DataSource,
  Content80DataSource,
  Content90DataSource
} from '../../lib/data.source'
import Content8 from './components/Content8'
import Content9 from './components/Content9'
import Content10 from './components/Content10'
import Content11 from './components/Content11'
import Content12 from './components/Content12'

const Home = () => {
  return (
    <>
      <Banner dataSource={Banner30DataSource} isMobile={false}></Banner>
      <Content8
        key="Content8_0"
        dataSource={Content80DataSource}
        isMobile={false}
      />
      <Content9
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={false}
      />
      <Content10
        key="Content10_0"
        dataSource={Content100DataSource}
        isMobile={false}
      />
      <Content11 key="Content11_0" dataSource={Content110DataSource} />
      <Content12 key="Content12_0" dataSource={Content120DataSource} />
    </>
  )
}

export default Home
