import DataTable from '../index'
import renderer from 'react-test-renderer'

describe('DataTable', function () {
  let dataTable
  beforeEach(function () {})

  afterEach(function () {
    dataTable = null
  })

  it('To match snapshot data table', async () => {
    dataTable = renderer
      .create(
        <DataTable
          title={'Data table'}
          textAddNew={'Add new'}
          onCreate={() => {}}
          onRefresh={() => {}}
          pagination={{}}
          filterComponent={'Filter component'}>
          <table></table>
        </DataTable>
      )
      .toJSON()

    expect(dataTable).toMatchSnapshot()
  })
})
