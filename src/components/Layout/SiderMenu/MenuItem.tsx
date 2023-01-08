import './index.less'

import { Menu } from 'antd'
import { LMainMenu, isGranted } from '../../../lib/abpUtility'
import { useNavigate } from 'react-router'

const { SubMenu } = Menu

export interface IMenuItemProps {
  name: string
  fullPath?: any
  icon?: any
  isGroup?: boolean
  children?: any
  permission?: string
}

const MenuItem = ({
  name,
  fullPath,
  icon: Icon,
  isGroup,
  children,
  permission,
  ...props
}: IMenuItemProps) => {
  const navigate = useNavigate()
  if (isGroup) {
    return (
      <Menu.ItemGroup title={LMainMenu(name)} {...props}>
        {children &&
          children.map((child: any) => <MenuItem {...child} key={fullPath} />)}
      </Menu.ItemGroup>
    )
  }

  if (children && children.length) {
    return (
      <SubMenu
        {...props}
        title={
          <div className={'wrap-sub-menu'}>
            {Icon ? <Icon className="menu-icon" /> : ''}
            <span>{LMainMenu(name)}</span>
          </div>
        }
        key={name}>
        {children &&
          children.map((child: any) => {
            if (!child) return null
            return <MenuItem {...child} key={child.fullPath} />
          })}
      </SubMenu>
    )
  }

  // Keep component is cause of error message from development mode
  const menuProps = { ...props } as any
  delete menuProps.component
  if (permission && !isGranted(permission)) return null
  const menuId = `menu-${name}`
  return (
    <Menu.Item key={fullPath} {...menuProps} title={LMainMenu(name)}>
      <a
        id={menuId}
        onClick={(e) => {
          e.preventDefault()
          navigate(fullPath)
        }}
        href={fullPath}>
        {Icon ? <Icon className="menu-icon" /> : ''}
        <span>{LMainMenu(name)}</span>
      </a>
    </Menu.Item>
  )
}

export default MenuItem
