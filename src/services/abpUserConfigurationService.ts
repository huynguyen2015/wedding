import AppSettingModel from '../models/AppSettingModel'
import axios from 'axios'

class AbpUserConfigurationService {
  http: any

  constructor() {
    this.http = axios.create()
  }

  public async getAll() {
    ///TODO: get translate values base on setting and init base on selected country
    const result = await this.http.get('/assets/languages/en.json')
    return new AppSettingModel(result.data)
  }
}

export default new AbpUserConfigurationService()
