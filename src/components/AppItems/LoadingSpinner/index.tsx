import { Spin } from 'antd'
import Icon from '@ant-design/icons'
import loadingImage from '../../../assets/images/logo-short.svg'

const antIcon = (
  <Icon
    component={() => <img src={loadingImage} className="full-width" />}
    className="anticon anticon-loading anticon-spin"
  />
)

// Return value should be component
const LoadingSpinner = () => <Spin indicator={antIcon} />

export const getLoadingSpinner = (isLoading, size = 'medium') => {
  return { spinning: isLoading, indicator: LoadingSpinner(), size }
}

export default LoadingSpinner
