import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd'
import { usePrevious } from '../../Hooks/usePrevious'
import isEqual from 'lodash/isEqual'
import moment from 'moment-timezone/moment-timezone'
import { RangePickerProps } from 'antd/lib/date-picker/generatePicker'
import { dateFormat } from '../../../lib/appconst'

const { RangePicker } = DatePicker

interface DateRangePickerProps {
  value?: [moment, moment] | undefined
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

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange
}) => {
  const previousValue = usePrevious(value)
  const [innerValue, setInnerValue] = useState(value)

  useEffect(() => {
    if (!isEqual(previousValue, value)) {
      setInnerValue(value)
    }
  }, [previousValue, value])

  useEffect(() => {
    if (onChange && !isEqual(innerValue, value)) {
      onChange(innerValue)
    }
  }, [innerValue, onChange, value])

  return <RangePicker format={dateFormat} />
}

export default DateRangePicker
