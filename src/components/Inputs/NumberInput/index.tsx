import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { usePrevious } from '../../Hooks/usePrevious'
import isEqual from 'lodash/isEqual'
import { L } from 'src/lib/abpUtility'
import {
  getCursortPositionAfterFormatNumber,
  inputNumberFormatter,
  inputNumberParse,
  numberExponentToLarge
} from 'src/lib/helper'

interface NumberInputV1Props {
  value?: number | string
  onChange?: (value) => void
  onBlur?: (value) => void
  suffix?: React.ReactNode
  max?: number
  min?: number
  locale?: string
  disabled?: boolean
  placeholder?: string
  small?: boolean
  step?: number | string
}

const NumberInputV1: React.FC<NumberInputV1Props> = ({
  value,
  onChange,
  disabled,
  placeholder
}) => {
  const previousValue = usePrevious(value)
  const [currencyValue, setNumberValue] = useState(value)
  const [commaCount, setCommaCount] = useState(0)

  useEffect(() => {
    if (!isEqual(previousValue, value)) {
      setNumberValue(inputNumberFormatter(numberExponentToLarge(value)))
    }
  }, [previousValue, value])

  const onTextChange = (e) => {
    const num = inputNumberFormatter(inputNumberParse(e.currentTarget.value))
    setNumberValue(num)
    getCursortPositionAfterFormatNumber(e, num, commaCount, setCommaCount)
  }

  const triggerChange = (e) => {
    if (onChange) {
      onChange(inputNumberParse(e.currentTarget.value))
    }
  }

  return (
    <Input
      value={currencyValue}
      disabled={disabled}
      placeholder={placeholder ? L(placeholder) : undefined}
      onBlur={triggerChange}
      onChange={onTextChange}
    />
  )
}

export default NumberInputV1
