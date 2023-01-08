import './AppLayout.less'
import { useState, createContext, useEffect } from 'react'
import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Layout } from 'antd'
import ProtectedRoute from '../Router/ProtectedRoute'
import { portalRouters } from '../Router/router.config'
import { inject, observer } from 'mobx-react'
import SessionStore from 'src/stores/sessionStore'
import Stores from '../../stores/storeIdentifier'
import { Footer20DataSource, Nav20DataSource } from '../../lib/data.source'

export interface IAppLayoutProps {
  sessionStore?: SessionStore
}

export const AppContext = createContext({})
const { Content } = Layout

const AppLayout = inject(Stores.SessionStore)(
  observer(({ sessionStore }: IAppLayoutProps) => {
    const location = useLocation()
    const { pathname } = location
    const [appData, setAppData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const initAppData = async () => {
        await sessionStore!.getCurrentLoginInformations()
        abp.auth.allPermissions = abp.auth.grantedPermissions =
          sessionStore!.currentLogin.permitted_actions
        abp.session = { currentLogin: sessionStore!.currentLogin }
      }
      setAppData({})
      setLoading(false)
      initAppData()
    }, [])

    const layout = (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header className="wrap-header">
          <Header isMobile={false} dataSource={Nav20DataSource} />
        </Layout.Header>
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
