import { FC } from 'react'
import { Form, Input } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts from '../../../lib/appconst'
import { SearchOutlined } from '@ant-design/icons'

const { formVerticalLayout } = AppConsts
interface FormInputProps {
  label?: string
  name: string | string[]
  help?: string
  rule?
  disabled?: boolean
  onPressEnter?: (value) => void
  placeholder?: string
}

const FormInputSearch: FC<FormInputProps> = ({
  label,
  placeholder,
  name,
  help,
  rule,
  disabled,
  onPressEnter
}) => {
  const handlePressEnter = (e) => {
    if (onPressEnter) {
      onPressEnter(e.target?.value)
    }
  }

  return (
    <Form.Item
      label={label ? L(label) : null}
      name={name}
      rules={rule}
      help={help ? L(help) : null}
      {...formVerticalLayout}>
      <Input
        disabled={disabled}
        prefix={<SearchOutlined />}
        onPressEnter={handlePressEnter}
        placeholder={L(placeholder || '')}
      />
    </Form.Item>
  )
}

export default FormInputSearch
