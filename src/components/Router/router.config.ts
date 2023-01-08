import {
  HomeOutlined,
  ContainerOutlined,
  ControlOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons'
import { lazy } from 'react'
import LoadableComponent from '../Layout/Loadable'

export const appLayout: any = {
  userLayout: {
    path: '/user',
    name: 'user',
    title: 'User',
    component: LoadableComponent(lazy(() => import('../Layout/UserLayout'))),
    isLayout: true
  },
  portalLayout: {
    path: '/',
    exact: true,
    name: 'home',
    permission: '',
    title: 'Home',
    component: LoadableComponent(lazy(() => import('../Layout/AppLayout'))),
    isLayout: true
  }
}

export const userRouters: any = {
  loginScreen: {
    path: '/',
    name: 'login',
    title: 'LogIn'
  },
  logout: {
    path: '/logout',
    permission: '',
    title: 'LOGOUT',
    name: 'LOGOUT',
    component: LoadableComponent(lazy(() => import('../Layout/Logout')))
  },
  exception: {
    path: '/exception/:type',
    permission: '',
    title: 'EXCEPTION',
    name: 'EXCEPTION',
    component: LoadableComponent(
      lazy(() => import('../../scenes/Common/Exception'))
    )
  }
}

export const portalRouters: any = {
  home: {
    path: '/home',
    fullPath: '/home',
    name: 'HOME',
    permission: '',
    title: 'Home',
    icon: HomeOutlined,
    component: LoadableComponent(lazy(() => import('../../scenes/Home')))
  },

  exception: {
    path: '/portal/exception/:type',
    permission: '',
    title: 'EXCEPTION',
    name: 'EXCEPTION',
    component: LoadableComponent(
      lazy(() => import('../../scenes/Common/Exception'))
    )
  }
}

export const routers = [
  ...Object.keys(userRouters).map((key) => userRouters[key]),
  ...Object.keys(portalRouters).map((key) => portalRouters[key])
]

export const appMenuGroups: any = [
  portalRouters.dashboard,
  portalRouters.loan,
  portalRouters.product,
  {
    name: 'SUBSCRIPTION_GROUP',
    icon: ContainerOutlined,
    children: [
      portalRouters.subscription,
      portalRouters.redemption,
      portalRouters.interest
    ]
  },
  {
    name: 'SETTING_GROUP',
    icon: ControlOutlined,
    children: [
      portalRouters.settingCurrency,
      portalRouters.loanProvider,
      portalRouters.systemUser
    ]
  },
  {
    name: 'REPORTING_GROUP',
    icon: FundProjectionScreenOutlined,
    children: [
      portalRouters.depositedCryptos,
      portalRouters.owedInterests,
      portalRouters.blendedRates,
      portalRouters.reporting
    ]
  },
  portalRouters.adminUser
]
