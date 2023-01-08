import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../Layout/Loading'
import { appLayout } from './router.config'

const Router = (isAuthenticated) => {
  const UserLayout = appLayout.userLayout.component
  const PortalLayout = appLayout.portalLayout.component

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/user/*" element={<UserLayout />} />
        <Route path="/portal/*" element={<PortalLayout />} />
        {isAuthenticated ? (
          <Route path="*" element={<PortalLayout />} />
        ) : undefined}
      </Routes>
    </Suspense>
  )
}

export default Router
