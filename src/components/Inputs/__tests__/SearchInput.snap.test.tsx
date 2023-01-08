import SearchInput from '../SearchInput/index'
import renderer from 'react-test-renderer'

describe('SearchInput', function () {
  let dataTable
  beforeEach(function () {})

  afterEach(function () {
    dataTable = null
  })

  it('To match snapshot search input', async () => {
    dataTable = renderer
      .create(
        <SearchInput
          value={1}
          onPressEnter={() => {}}
          onChange={() => {}}
          onBlur={() => {}}
          placeholder="Currency input"
          small={false}></SearchInput>
      )
      .toJSON()

    expect(dataTable).toMatchSnapshot()
  })
})
