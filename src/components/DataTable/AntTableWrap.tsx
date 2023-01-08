import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'

export interface IAntTableWrapProps {
  dataSource?: any[]
  columns?: ColumnsType<any>
  isLoading?: boolean
}

const AntTableWrap = ({
  dataSource,
  columns,
  isLoading
}: IAntTableWrapProps) => {
  return (
    <Table
      size="middle"
      className="custom-ant-table"
      rowKey={(record) => record.id || ''}
      columns={columns}
      pagination={false}
      loading={isLoading}
      dataSource={dataSource}
      scroll={{ x: 'max-content', scrollToFirstRowOnChange: true }}
    />
  )
}

export default AntTableWrap
