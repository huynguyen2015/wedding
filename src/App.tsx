import './App.css'

import * as React from 'react'
import { inject } from 'mobx-react'
import Router from './components/Router'
import SessionStore from './stores/sessionStore'
import Stores from './stores/storeIdentifier'
// import { L } from './lib/abpUtility'

export interface IAppProps {
  sessionStore?: SessionStore
}

@inject(Stores.SessionStore)
class App extends React.Component<IAppProps> {
  async componentDidMount() {
    const { sessionStore } = this.props
    await sessionStore!.getCurrentLoginInformations()
    abp.auth.allPermissions = abp.auth.grantedPermissions =
      sessionStore!.currentLogin.permitted_actions
  }

  public render() {
    return <Router />
  }
}

export default App
