import { Provider } from 'mobx-react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import initializeStores from './stores/storeInitializer'

it('renders without crashing', () => {
  const stores = initializeStores()
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider {...stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
