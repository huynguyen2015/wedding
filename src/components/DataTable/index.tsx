import React from 'react'
import { Button, Card, Col, Pagination, Row } from 'antd'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { isGranted, L } from '../../lib/abpUtility'
import './index.less'

export interface IDataTableProps {
  title?: string
  keywordPlaceholder?: string
  textAddNew?: string
  onCreate?: () => void
  onRefresh?: () => void
  pagination?: any
  createPermission?: string
  handleRefresh?: (key, value) => void
  actionComponent?: any
  filterComponent?: any
  children?: any
}

const DataTable: React.FunctionComponent<IDataTableProps> = ({
  title,
  textAddNew,
  onCreate,
  onRefresh,
  pagination,
  createPermission,
  actionComponent,
  filterComponent,
  children
}) => {
  const handleCreate = () => {
    onCreate && onCreate()
  }

  const handleOnChange = (page, pageSize) => {
    if (pagination && pagination.onChange) {
      pagination.onChange({ current: page, pageSize: pageSize })
    }
  }

  return (
    <>
      <Row className={'mb-2 table-header'} gutter={[8, 8]}>
        {title && <Col className="title">{L(title)}</Col>}
        <Col className="text-right justify-content-end d-flex" flex="auto">
          {actionComponent}
          {onRefresh && (
            <Button
              id="btn-refresh-table"
              type="ghost"
              shape="circle"
              size="large"
              icon={<ReloadOutlined />}
              onClick={onRefresh}
              style={{
                boxShadow: '0px 4px 8px rgba(110, 186, 196, 0.2)',
                marginRight: onCreate ? '10px' : '0'
              }}>
              {textAddNew}
            </Button>
          )}
          {onCreate && (!createPermission || isGranted(createPermission)) && (
            <Button
              id="btn-add-new"
              type="primary"
              shape="circle"
              size="large"
              icon={<PlusOutlined />}
              onClick={handleCreate}
              style={{ boxShadow: '0px 4px 8px rgba(110, 186, 196, 0.2)' }}>
              {textAddNew}
            </Button>
          )}
        </Col>
      </Row>
      <Card bordered={false}>
        <Row gutter={[16, 16]}>
          {filterComponent && (
            <Col sm={{ span: 24, offset: 0 }}>{filterComponent}</Col>
          )}
          <Col sm={{ span: 24, offset: 0 }}>{children}</Col>
        </Row>
        {pagination && pagination.total > 0 && (
          <Row className="mt-3 pb-3">
            <Col sm={{ span: 24, offset: 0 }} style={{ textAlign: 'end' }}>
              <Pagination
                size="small"
                showTotal={(total) => L('TOTAL_{0}_ITEMS', total)}
                pageSizeOptions={[10, 25, 50, 100, 500, 1000]}
                {...pagination}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
        )}
      </Card>
    </>
  )
}

export default DataTable
