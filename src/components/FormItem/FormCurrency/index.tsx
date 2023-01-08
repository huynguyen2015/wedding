import React from 'react'
import { Form } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts from '../../../lib/appconst'
import CurrencyInput from 'src/components/Inputs/CurrencyInput'

const { formVerticalLayout } = AppConsts
interface FormInputProps {
  label: string
  name: string | string[]
  placeholder?: string
  min?: number
  max?: number
  disabled?: boolean
  rule?
}

const FormCurrencyV1: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  rule,
  disabled
}) => {
  return (
    <Form.Item
      label={L(label)}
      name={name}
      rules={rule}
      {...formVerticalLayout}>
      <CurrencyInput
        disabled={disabled}
        placeholder={placeholder ? L(placeholder) : undefined}
      />
    </Form.Item>
  )
}

export default FormCurrencyV1
