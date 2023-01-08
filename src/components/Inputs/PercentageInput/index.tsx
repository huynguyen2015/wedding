import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import isEqual from 'lodash/isEqual'
import {
  getCursortPositionAfterFormatNumber,
  inputPercentageFormatter,
  inputPercentageParse,
  numberExponentToLarge
} from '../../../lib/helper'
import { usePrevious } from '../../Hooks/usePrevious'
import { L } from 'src/lib/abpUtility'

interface PercentageInputProps {
  value?: number | string
  onChange?: (value) => void
  max?: number
  min?: number
  symbol?: string
  locale?: string
  disabled?: boolean
  placeholder?: string
  step?: number | string
}

const PercentageInput: React.FC<PercentageInputProps> = ({
  value,
  onChange,
  symbol = '',
  disabled = false,
  placeholder
}) => {
  const previousValue = usePrevious(value)
  const [percentageValue, setPercentageValue] = useState(value)
  const [commaCount, setCommaCount] = useState(0)

  useEffect(() => {
    if (!isEqual(previousValue, value)) {
      setPercentageValue(
        inputPercentageFormatter(numberExponentToLarge(value), symbol)
      )
    }
  }, [previousValue, value])

  const onTextChange = (e) => {
    const num = inputPercentageFormatter(
      inputPercentageParse(e.currentTarget.value, symbol),
      symbol
    )
    setPercentageValue(num)
    getCursortPositionAfterFormatNumber(e, num, commaCount, setCommaCount)
  }

  const triggerChange = (e) => {
    if (onChange) {
      onChange(inputPercentageParse(e.currentTarget.value, symbol))
    }
  }

  return (
    <Input
      value={percentageValue}
      disabled={disabled}
      placeholder={placeholder ? L(placeholder) : undefined}
      onBlur={triggerChange}
      onChange={onTextChange}
    />
  )
}

export default PercentageInput
