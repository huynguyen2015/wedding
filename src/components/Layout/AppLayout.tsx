import './AppLayout.less'
import { useState, createContext, useEffect } from 'react'
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { enquireScreen } from 'enquire-js'
import Footer from './Footer'
import Header from './Header'
import { Layout } from 'antd'
import ProtectedRoute from '../Router/ProtectedRoute'
import { portalRouters } from '../Router/router.config'
import { inject, observer } from 'mobx-react'
import SessionStore from 'src/stores/sessionStore'
import Stores from '../../stores/storeIdentifier'
import { Footer20DataSource, Nav20DataSource } from '../../lib/data.source'

let isMobile = false
enquireScreen((b) => {
  isMobile = b
})
export interface IAppLayoutProps {
  sessionStore?: SessionStore
}

export const AppContext = createContext({})
const { Content } = Layout

const AppLayout = inject(Stores.SessionStore)(
  observer(() => {
    const location = useLocation()
    const { pathname } = location
    const [appData, setAppData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setAppData({})
      setLoading(false)
    }, [])

    const layout = (
      <Layout style={{ minHeight: '100vh' }}>
        <Header isMobile={isMobile} dataSource={Nav20DataSource} />
        <Content className="wrap-content">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to={{
                    pathname: '/home'
                  }}
                />
              }
            />
            {Object.keys(portalRouters).map((key: any, index: any) => {
              const route = portalRouters[key]
              const ItemComponent = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<ProtectedRoute component={<ItemComponent />} />}
                />
              )
            })}
            {pathname !== '/' && (
              <Route
                element={
                  <Navigate
                    to={{
                      pathname: '/exception?type=404'
                    }}
                  />
                }
              />
            )}
          </Routes>
        </Content>
        <Footer dataSource={Footer20DataSource} isMobile={false} />
      </Layout>
    )

    return loading ? null : (
      <AppContext.Provider value={appData}>{layout}</AppContext.Provider>
    )
  })
)

export default AppLayout
