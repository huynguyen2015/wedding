// import { Navigate } from 'react-router-dom'

// import { isGranted } from '../../lib/abpUtility'

const ProtectedRoute = ({ component }: any) => {
  // if (!abp.session.currentLogin) {
  //   return <Navigate to="/exception?type=401" />
  // }

  // if (permission && !isGranted(permission)) {
  //   return <Navigate to="/exception?type=401" />
  // }

  return component || null
}

export default ProtectedRoute
