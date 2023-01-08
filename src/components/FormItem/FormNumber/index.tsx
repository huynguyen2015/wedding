import React from 'react'
import { Form } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts from '../../../lib/appconst'
import NumberInput from 'src/components/Inputs/NumberInput'

const { formVerticalLayout } = AppConsts
interface FormNumberProps {
  label: string
  name: string | string[]
  placeholder?: string
  rule?
  suffix?: string
  min?: number
  max?: number
  disabled?: boolean
  step?: number | string
}

const FormNumber: React.FC<FormNumberProps> = ({
  label,
  name,
  placeholder,
  rule,
  suffix,
  min,
  max,
  disabled,
  step
}) => {
  return (
    <Form.Item
      label={L(label)}
      name={name}
      rules={rule}
      {...formVerticalLayout}>
      <NumberInput
        suffix={suffix}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Form.Item>
  )
}

export default FormNumber
