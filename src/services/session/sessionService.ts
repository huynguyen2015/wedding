import CurrentUserModel from '../../models/Session/currentUserModel'
import http from '../httpService'

class SessionService {
  public async getCurrentLoginInformations(): Promise<CurrentUserModel> {
    const result = await http.get('admins/current')

    return CurrentUserModel.assign(result)
  }
}

export default new SessionService()
