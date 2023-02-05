import React, { PureComponent } from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { isImg } from '../../../lib/utils'
interface IProps {
  dataSource: any
  isMobile: boolean
}
class Footer extends PureComponent<IProps> {
  render() {
    const { ...props } = this.props
    const { dataSource } = props as any
    return (
      <div className="home-page-wrapper footer2-wrapper">
        <OverPack className="home-page footer2" playScale="0.05">
          <TweenOne
            animation={{ x: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            className="copyright">
            {dataSource.copyright.children.map((item, i) =>
              React.createElement(
                item.name.indexOf('title') === 0 ? 'h1' : 'div',
                { key: i.toString(), ...item },
                typeof item.children === 'string' && item.children.match(isImg)
                  ? React.createElement('img', {
                      src: item.children,
                      alt: 'img'
                    })
                  : item.children
              )
            )}
          </TweenOne>
        </OverPack>
      </div>
    )
  }
}

export default Footer
