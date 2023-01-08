import DateRangePicker from '../DateRangePicker/index'
import renderer from 'react-test-renderer'
import moment from 'moment-timezone/moment-timezone'
import { dateTimeFormat } from 'src/lib/appconst'

describe('DateRangePicker', function () {
  let dataTable
  beforeEach(function () {})

  afterEach(function () {
    dataTable = null
  })

  it('To match snapshot date range picker', async () => {
    dataTable = renderer
      .create(
        <DateRangePicker
          value={[moment(), moment()]}
          onChange={() => {}}
          dateTimeFormat={dateTimeFormat}
          placeholder={['From date', 'To date']}></DateRangePicker>
      )
      .toJSON()

    expect(dataTable).toMatchSnapshot()
  })
})
