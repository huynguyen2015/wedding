import { action, observable } from 'mobx'

import CurrentUserModel from '../models/Session/currentUserModel'
import sessionService from '../services/session/sessionService'

class SessionStore {
  @observable currentLogin: CurrentUserModel = new CurrentUserModel()
  @observable profilePicture!: string

  @action
  async getCurrentLoginInformations() {
    this.currentLogin = await sessionService.getCurrentLoginInformations()
  }

  @action
  async getMyProfilePicture() {
    this.profilePicture = '/assets/images/user.png'
  }
}

export default SessionStore
