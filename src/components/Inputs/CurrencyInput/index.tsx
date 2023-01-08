import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import isEqual from 'lodash/isEqual'
import {
  getCursortPositionAfterFormatNumber,
  inputCurrencyFormatter,
  inputCurrencyParse,
  numberExponentToLarge
} from '../../../lib/helper'
import { usePrevious } from '../../Hooks/usePrevious'
import { L } from 'src/lib/abpUtility'

interface CurrencyInputProps {
  value?: number | string
  onChange?: (value) => void
  max?: number
  min?: number
  symbol?: string
  locale?: string
  disabled?: boolean
  placeholder?: string
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  onChange,
  disabled = false,
  placeholder
}) => {
  const previousValue = usePrevious(value)
  const [currencyValue, setCurrencyValue] = useState(value)
  const [commaCount, setCommaCount] = useState(0)

  useEffect(() => {
    if (!isEqual(previousValue, value)) {
      setCurrencyValue(inputCurrencyFormatter(numberExponentToLarge(value)))
    }
  }, [previousValue, value])

  const onTextChange = (e) => {
    const num = inputCurrencyFormatter(
      inputCurrencyParse(e.currentTarget.value)
    )
    setCurrencyValue(num)

    getCursortPositionAfterFormatNumber(e, num, commaCount, setCommaCount)
  }

  const triggerChange = (e) => {
    if (onChange) {
      onChange(inputCurrencyParse(e.currentTarget.value))
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

export default CurrencyInput
