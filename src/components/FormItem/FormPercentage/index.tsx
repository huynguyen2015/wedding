import React from 'react'
import { Form } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts from '../../../lib/appconst'
import PercentageInput from 'src/components/Inputs/PercentageInput'

const { formVerticalLayout } = AppConsts
interface FormInputProps {
  label: string
  name: string | string[]
  placeholder?: string
  min?: number
  max?: number
  disabled?: boolean
  rule?
  step?: number | string
}

const FormPercentage: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  rule,
  disabled,
  min = 0,
  max,
  step
}) => {
  return (
    <Form.Item
      label={L(label)}
      name={name}
      rules={rule}
      {...formVerticalLayout}>
      <PercentageInput
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        symbol="%"
        placeholder={placeholder}
      />
    </Form.Item>
  )
}

export default FormPercentage
