import React from 'react'
import { Form } from 'antd'
import DateRangePicker from '../../Inputs/DateRangePicker'
import { L } from '../../../lib/abpUtility'
import AppConsts, { dateFormat } from '../../../lib/appconst'
import { RangePickerProps } from 'antd/lib/date-picker/generatePicker'
import moment from 'moment-timezone/moment-timezone'

const { formVerticalLayout } = AppConsts
interface FormDatePickerProps {
  value?: [moment, moment] | undefined
  label?: string
  name: string | string[]
  rule?
  disabled?: [boolean, boolean] | undefined
  placeholder?: [string, string] | undefined
  dateTimeFormat?: string
  onChangedateTimeProps?: RangePickerProps<moment>
  minDate?: Date
  maxDate?: Date
  withinRange?: number
  onChange?: (values) => void
  inputReadOnly?: boolean
}

const FormDateRangePicker: React.FC<FormDatePickerProps> = ({
  value,
  label,
  name,
  rule,
  disabled,
  dateTimeFormat = dateFormat,
  minDate,
  maxDate,
  withinRange,
  onChange,
  inputReadOnly = true,
  placeholder
}) => {
  return (
    <Form.Item
      label={label ? L(label) : null}
      name={name}
      rules={rule}
      {...formVerticalLayout}>
      <DateRangePicker
        value={value}
        minDate={minDate}
        maxDate={maxDate}
        withinRange={withinRange}
        dateTimeFormat={dateTimeFormat}
        disabled={disabled}
        inputReadOnly={inputReadOnly}
        onChange={onChange}
        placeholder={
          placeholder ? [L(placeholder[0]), L(placeholder[1])] : undefined
        }
      />
    </Form.Item>
  )
}

export default FormDateRangePicker
