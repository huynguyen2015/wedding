import React from 'react'
import { Form, Select } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts from '../../../lib/appconst'
import { SelectProps, SelectValue } from 'antd/lib/select'
import { renderOptions } from '../../../lib/helper'
import { OptionModel } from '../../../models/global'

const { formVerticalLayout } = AppConsts
interface FormSelectProps {
  label?: string
  name: string
  rule?
  options: OptionModel[]
  placeholder?: string
  selectProps?: SelectProps<SelectValue>
  disabled?: boolean
  allowClear?: boolean
  className?: string
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  rule,
  options,
  placeholder,
  selectProps,
  disabled = false,
  allowClear = true
}) => {
  return (
    <Form.Item
      label={label ? L(label) : null}
      name={name}
      rules={rule}
      {...formVerticalLayout}>
      <Select
        showSearch
        showArrow
        allowClear={allowClear}
        className="full-width"
        disabled={disabled}
        placeholder={placeholder ? L(placeholder) : ''}
        {...selectProps}>
        {renderOptions(options)}
      </Select>
    </Form.Item>
  )
}

export default FormSelect
