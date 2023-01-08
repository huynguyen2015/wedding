import './index.less'

import { Avatar, Col, Layout, Menu } from 'antd'
import { isGranted } from '../../../lib/abpUtility'

import AppLogo from '../../../assets/images/logo-short.svg'
import AppLogoLetter from '../../../assets/images/logo-lettermark-white.svg'
import { appMenuGroups, portalRouters } from '../../Router/router.config'
import utils from '../../../utils/utils'
import MenuItem from './MenuItem'
import { useState } from 'react'

const { Sider } = Layout

export interface ISiderMenuProps {
  path: any
  collapsed: boolean
  onCollapse: any
  location: any
}

const SiderMenu = (props: ISiderMenuProps) => {
  const { collapsed, location, onCollapse } = props
  const [shadowBottomClass, setShadowBottomClass] = useState('shadow-bottom')
  const currentRoute = utils.getRoute(location.pathname)

  const handleScroll = (e) => {
    const isScrolled = e.target.scrollTop > 20
    setShadowBottomClass(isScrolled ? 'shadow-bottom d-block' : 'shadow-bottom')
  }

  return (
    <Sider
      trigger={null}
      className="sidebar sidebar-fixed"
      width={256}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}>
      {collapsed ? (
        <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
          <Avatar
            shape="square"
            style={{ height: 40, width: 40 }}
            src={AppLogo}
          />
        </Col>
      ) : (
        <Col className="wrap-long-logo">
          <Avatar
            shape="square"
            style={{ height: 40, width: 40, marginRight: 10 }}
            src={AppLogo}
          />
          <Avatar
            shape="square"
            style={{ height: 'auto', width: 156 }}
            src={AppLogoLetter}
          />
        </Col>
      )}

      <div className="wrap-menu-scroll" onScroll={handleScroll}>
        <div className={shadowBottomClass}></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[
            currentRoute
              ? currentRoute.fullPath
              : portalRouters.dashboard.fullPath
          ]}>
          {(appMenuGroups || []).map((route: any, index: number) => {
            if (!route) {
              return null
            }
            const hasGrantedChild = (route?.children || []).findIndex((item) =>
              isGranted(item?.permission)
            )

            if (
              (route?.permission && !isGranted(route?.permission)) ||
              (route?.children &&
                route?.children.length &&
                hasGrantedChild === -1)
            ) {
              return null
            }

            return (
              <MenuItem
                key={route.fullPath || index}
                name={route.name}
                fullPath={route.fullPath}
                icon={route.icon}
                isGroup={route.isGroup}>
                {route.children}
              </MenuItem>
            )
          })}
        </Menu>
      </div>
    </Sider>
  )
}

export default SiderMenu
