import { CSSProperties } from 'react'

export const GlobalIcon = (props) => (
  <img src="/static/icons/global.png" {...props} />
)

type IconCustomProps = {
  iconPath: string
  className?: string | undefined
  style?: CSSProperties | undefined
}

export function IconCustom({ iconPath, ...res }: IconCustomProps) {
  return <img src={iconPath} {...res} />
}
