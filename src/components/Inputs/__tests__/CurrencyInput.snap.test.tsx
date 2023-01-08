import CurrencyInput from '../CurrencyInput/index'
import renderer from 'react-test-renderer'

describe('CurrencyInput', function () {
  let currencyInput
  beforeEach(function () {})

  afterEach(function () {
    currencyInput = null
  })

  it('To match snapshot currency input', async () => {
    currencyInput = renderer
      .create(
        <CurrencyInput
          value={1}
          onChange={() => {}}
          placeholder="Currency input"></CurrencyInput>
      )
      .toJSON()

    expect(currencyInput).toMatchSnapshot()
  })
})
