import MultiLanguageInput from '../MultiLanguageInput/index'
import renderer from 'react-test-renderer'
import moment from 'moment-timezone/moment-timezone'

describe('MultiLanguageInput', function () {
  let dataTable
  beforeEach(function () {})

  afterEach(function () {
    dataTable = null
  })

  it('To match snapshot multi language input', async () => {
    dataTable = renderer
      .create(
        <MultiLanguageInput
          value={[moment(), moment()]}
          onChange={() => {}}
          maxLength={30}></MultiLanguageInput>
      )
      .toJSON()

    expect(dataTable).toMatchSnapshot()
  })
})
