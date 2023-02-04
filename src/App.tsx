import './App.css'

import * as React from 'react'
import { inject } from 'mobx-react'
import Router from './components/Router'
import SessionStore from './stores/sessionStore'
import Stores from './stores/storeIdentifier'

export interface IAppProps {
  sessionStore?: SessionStore
}

@inject(Stores.SessionStore)
class App extends React.Component<IAppProps> {
  public render() {
    return <Router />
  }
}

export default App
