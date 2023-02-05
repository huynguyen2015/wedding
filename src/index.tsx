import './index.css'

import ReactDOM from 'react-dom/client'
import * as moment from 'moment-timezone/moment-timezone'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Utils from './utils/utils'
import abpUserConfigurationService from './services/abpUserConfigurationService'
import initializeStores from './stores/storeInitializer'
import registerServiceWorker from './registerServiceWorker'
import './styles/app-layout.less'
import './styles/custom-ant.less'
import './styles/custom-bootstrap.less'

declare const abp: any

Utils.setLocalization()

abpUserConfigurationService.getAll().then((data) => {
  Utils.extend(true, abp, data)
  abp.clock.provider = Utils.getCurrentClockProvider(data.clock.provider)

  moment.locale(abp.localization.currentLanguage.name)

  if (abp.clock.provider.supportsMultipleTimezone) {
    moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId)
  }

  const stores = initializeStores()
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  )
  root.render(
    <Provider {...stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )

  registerServiceWorker()
})
