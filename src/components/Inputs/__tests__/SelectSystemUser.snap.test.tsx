import SelectSystemUser from '../SelectSystemUser/index'
import renderer from 'react-test-renderer'

describe('SelectSystemUser', function () {
  let dataTable
  beforeEach(function () {})

  afterEach(function () {
    dataTable = null
  })

  it('To match snapshot select system user', async () => {
    dataTable = renderer
      .create(
        <SelectSystemUser
          value={1}
          fieldKey={'systemUser'}
          onChange={() => {}}
          placeholder="Select system user"
          systemUsers={[]}></SelectSystemUser>
      )
      .toJSON()

    expect(dataTable).toMatchSnapshot()
  })
})
