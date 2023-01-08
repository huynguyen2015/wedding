import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import LoadingSpinner from 'src/components/AppItems/LoadingSpinner'

const Loading = (props) => {
  const { delay = 100 } = props
  const [ready, setReady] = useState(delay === 0)
  useEffect(() => {
    let timeout
    if (!ready) {
      timeout = setTimeout(() => setReady(true), delay)
    }
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  if (!ready) return null
  return (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
      <Spin size="large" indicator={LoadingSpinner()} />
    </div>
  )
}

export default Loading
