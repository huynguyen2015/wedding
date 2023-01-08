import * as React from 'react'

import AuthenticationStore from '../../../stores/authenticationStore'
import Stores from '../../../stores/storeIdentifier'
import { inject } from 'mobx-react'

export interface ILogoutProps {
  authenticationStore?: AuthenticationStore
}

@inject(Stores.AuthenticationStore)
class Logout extends React.Component<ILogoutProps> {
  componentDidMount() {
    window.location.href = '/oauth2/sign_in'
  }

  render() {
    return null
  }
}

export default Logout
