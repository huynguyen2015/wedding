import React from 'react'
import { Checkbox, Form } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts from '../../../lib/appconst'

const { formVerticalLayout } = AppConsts
interface FormCheckboxProps {
  label: string
  name: string | string[]
  rule?
  disabled?: boolean
  onChange?: (value) => void
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  name,
  rule,
  disabled,
  onChange
}) => {
  return (
    <Form.Item
      name={name}
      rules={rule}
      valuePropName="checked"
      {...formVerticalLayout}>
      <Checkbox disabled={disabled} onChange={onChange}>
        {L(label)}{' '}
      </Checkbox>
    </Form.Item>
  )
}

export default FormCheckbox
