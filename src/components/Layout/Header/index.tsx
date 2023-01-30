import { Component, createElement } from 'react'
import TweenOne from 'rc-tween-one'
import { Link } from 'rc-scroll-anim'

interface IProps {
  dataSource: any
  isMobile: boolean
}

class Header extends Component<IProps> {
  state = {
    phoneOpen: false
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen
    this.setState({
      phoneOpen
    })
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props

    const { phoneOpen } = this.state
    const { LinkMenu } = dataSource
    const navData = LinkMenu.children
    const navChildren = Object.keys(navData).map((key, i) => {
      const item = navData[key]
      const tag = Link
      const tagProps = { pathname: item.to }

      return createElement(
        tag,
        { ...item, ...tagProps, key: i.toString() },
        navData[key].children
      )
    })
    const moment = phoneOpen === undefined ? 300 : null
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}>
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}>
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}>
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick()
              }}>
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...LinkMenu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto'
                      }
                    },
                    ease: 'easeInOutQuad'
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}>
            {navChildren}
          </TweenOne>
        </div>
      </TweenOne>
    )
  }
}

export default Header
