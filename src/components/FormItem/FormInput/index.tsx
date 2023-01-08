import { ReactNode, FC } from 'react'
import { Form, Input } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts from '../../../lib/appconst'

const { formVerticalLayout } = AppConsts
interface FormInputProps {
  label: string
  name: string | string[]
  help?: string
  rule?
  disabled?: boolean
  prefix?: ReactNode
  placeholder?: string
}

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  help,
  rule,
  disabled,
  prefix,
  placeholder
}) => {
  return (
    <Form.Item
      label={L(label)}
      name={name}
      rules={rule}
      help={help ? L(help) : null}
      {...formVerticalLayout}>
      <Input
        disabled={disabled}
        prefix={prefix}
        placeholder={placeholder ? L(placeholder) : undefined}
      />
    </Form.Item>
  )
}

export default FormInput
