import './UserLayout.less'

import { Route, Routes } from 'react-router-dom'

import { Col } from 'antd'
import { userRouters } from '../Router/router.config'

function UserLayout() {
  return (
    <Col className="container">
      <div style={{ height: 'calc(100vh - 55px)' }}>
        <Routes>
          {Object.keys(userRouters).map((key: any, index: number) => {
            const route = userRouters[key]
            const ItemComponent = route.component
            if (!ItemComponent) {
              return null
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={<ItemComponent />}
              />
            )
          })}
        </Routes>
      </div>
    </Col>
  )
}

export default UserLayout
