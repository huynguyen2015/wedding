import SelectCurrency from '../SelectCurrency/index'
import renderer from 'react-test-renderer'

describe('SelectCurrency', function () {
  let dataTable
  beforeEach(function () {})

  afterEach(function () {
    dataTable = null
  })

  it('To match snapshot select currency', async () => {
    dataTable = renderer
      .create(
        <SelectCurrency
          value={1}
          fieldKey={'currency'}
          onChange={() => {}}
          placeholder="Select currency"
          currencies={[]}></SelectCurrency>
      )
      .toJSON()

    expect(dataTable).toMatchSnapshot()
  })
})
