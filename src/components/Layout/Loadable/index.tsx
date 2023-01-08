import { Suspense } from 'react'
import Loading from '../Loading'

// eslint-disable-next-line react/display-name
const LoadableComponent = (Component) => () =>
  (
    <Suspense fallback={<Loading />}>
      <Component></Component>
    </Suspense>
  )

export default LoadableComponent
