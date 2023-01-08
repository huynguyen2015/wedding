import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { usePrevious } from '../../Hooks/usePrevious'
import isEqual from 'lodash/isEqual'

interface SearchInputProps {
  value?: number | string
  defaultValue?: number | string
  onPressEnter?: (value) => void
  onChange?: (value) => void
  onBlur?: (value) => void
  prefix?: React.ReactNode
  disabled?: boolean
  placeholder?: string
  small?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  defaultValue,
  onPressEnter,
  onChange,
  onBlur,
  prefix,
  disabled,
  placeholder,
  small
}) => {
  const previousValue = usePrevious(value)
  const [textValue, setTextValue] = useState(value)

  useEffect(() => {
    if (!isEqual(previousValue, value)) {
      setTextValue(value)
    }
  }, [previousValue, value])

  const triggerChange = () => {
    if (onChange) {
      onChange(textValue)
    }
  }

  const onTextChange = (e) => {
    setTextValue(e.target?.value)
  }

  const handleBlur = () => {
    triggerChange()
    if (onBlur) {
      onBlur(textValue)
    }
  }

  const handlePressEnter = (e) => {
    triggerChange()
    if (onPressEnter) {
      onPressEnter(e.target?.value)
    }
  }

  return (
    <Input
      value={textValue}
      className="full-width"
      defaultValue={defaultValue}
      onChange={onTextChange}
      onBlur={handleBlur}
      onPressEnter={handlePressEnter}
      disabled={disabled}
      placeholder={placeholder || ''}
      size={small ? 'small' : 'large'}
      prefix={prefix}
    />
  )
}

export default SearchInput
