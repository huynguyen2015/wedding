import React from 'react'
import { DatePicker, Form } from 'antd'
import { L } from '../../../lib/abpUtility'
import AppConsts, { dateFormat } from '../../../lib/appconst'
import { PickerProps } from 'antd/lib/date-picker/generatePicker'
import moment from 'moment-timezone/moment-timezone'

const { formVerticalLayout } = AppConsts
interface FormDatePickerProps {
  label?: string
  name: string | string[]
  rule?
  disabled?: boolean
  disabledDates?: any
  placeholder?: string
  dateTimeFormat?: string
  dateTimeProps?: PickerProps<moment>
  minDate?: Date
  maxDate?: Date
  onChange?: (value) => void
  inputReadOnly?: boolean
  className?: string
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  label,
  name,
  rule,
  disabled,
  disabledDates,
  placeholder,
  dateTimeFormat = dateFormat,
  dateTimeProps,
  minDate,
  maxDate,
  onChange,
  inputReadOnly,
  className
}) => {
  const disabledDate = (d) => {
    return (
      (!!minDate && (!d || d.isBefore(minDate, 'days'))) ||
      (!!maxDate && (!d || d.isAfter(maxDate, 'days'))) ||
      (!!disabledDates && (!d || disabledDates[d.format(dateFormat)]))
    )
  }
  return (
    <Form.Item
      label={label ? L(label) : undefined}
      name={name}
      rules={rule}
      className={className}
      {...formVerticalLayout}>
      <DatePicker
        className="full-width"
        format={dateTimeFormat}
        placeholder={placeholder ? L(placeholder) : ''}
        disabled={disabled}
        inputReadOnly={inputReadOnly}
        onChange={onChange}
        disabledDate={disabledDate}
        {...dateTimeProps}
      />
    </Form.Item>
  )
}

export default FormDatePicker
