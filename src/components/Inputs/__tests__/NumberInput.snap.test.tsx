import NumberInput from '../NumberInput/index'
import renderer from 'react-test-renderer'

describe('NumberInput', function () {
  let dataTable
  beforeEach(function () {})

  afterEach(function () {
    dataTable = null
  })

  it('To match snapshot number input', async () => {
    dataTable = renderer
      .create(
        <NumberInput
          value={1}
          onChange={() => {}}
          onBlur={() => {}}
          min={0}
          max={100}
          placeholder="Currency input"
          small={false}
          step={1}></NumberInput>
      )
      .toJSON()

    expect(dataTable).toMatchSnapshot()
  })
})
