import React from 'react'
import SelectBoxItem from './SelectBoxItem'
import { OptionModel } from '../../../models/global'
import './SelectBoxItem.less'

interface SelectBoxItemsProps {
  value?: any
  onChange?: (value) => void
  options: OptionModel[]
  containerClass?: string
}

const SelectBoxItems: React.FC<SelectBoxItemsProps> = ({
  value,
  onChange,
  options,
  containerClass
}) => {
  const handleSelect = (selectedValue) => {
    if (onChange) {
      onChange(selectedValue)
    }
  }

  const wrapperClass = `wrap-select-box ${containerClass}`

  return (
    <div className={wrapperClass}>
      {(options || []).map((item, index) => {
        return (
          <SelectBoxItem
            value={item.value}
            label={item.label}
            icon={item.icon}
            selectedValue={value}
            key={index}
            onChange={handleSelect}
          />
        )
      })}
    </div>
  )
}

export default SelectBoxItems
