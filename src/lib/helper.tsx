import { Avatar, Modal, notification, Tooltip, Select, Tag } from 'antd'
import moment from 'moment-timezone'
import { appStatusColors, emailRegex } from './appconst'
import { ManOutlined, WomanOutlined } from '@ant-design/icons'
import Badge from 'antd/lib/badge'
import { L } from './abpUtility'
import { Status } from '../models/global'

const { Option } = Select

export function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export function getPreviewFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export const notifyError = (title: string, content: string) => {
  Modal.error({ title, content })
}

export const notifySuccess = (message: string, description: string) => {
  notification.success({ message, description })
}

export const mapActiveStatus = (isActive) => {
  return isActive
    ? new Status('ACTIVE', appStatusColors.success)
    : new Status('INACTIVE', appStatusColors.error)
}

export function isNullOrEmpty(text) {
  if (!text) {
    return true
  }

  text = text.trim()
  return text.length < 1
}

export function isObjectUndefinedOrNull(obj) {
  return obj === undefined || obj === null
}

export function isValidEmail(text) {
  if (!text || isNullOrEmpty(text)) {
    return false
  }
  return emailRegex.test(text)
}

export function filterOptions(input, option) {
  return option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
}

export function arrayToObject(arr, key, value) {
  return arr.reduce((obj, current) => {
    return { ...obj, [current[key]]: current[value] }
  }, {})
}

export function getFirstLetterAndUpperCase(text) {
  return text && text.length ? text.charAt(0).toUpperCase() : 'G'
}

export function hexToRGB(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null
}

export function getCountDownXmasMessage(loaderMessage) {
  // Find the distance between now and the count down date
  // Get today's date and time
  const countDownDate = new Date(new Date().getFullYear(), 11, 25).getTime()
  const now = new Date().getTime()
  const distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  return days === 0
    ? 'Merry Christmas!'
    : (loaderMessage || '').replace('{0}', `${days}`)
}

export function initMultiLanguageField() {
  return (abp.localization.languages || []).map((lang) => {
    return { languageName: lang.name, icon: lang.icon, value: '' }
  })
}

export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function mapMultiLanguageField(existLangs) {
  return (abp.localization.languages || []).map((lang) => {
    const currentLang =
      (existLangs || []).find((item) => item.languageName === lang.name) || {}
    return { ...currentLang, languageName: lang.name, icon: lang.icon }
  })
}

export function isBetween(start, end, current) {
  // Format date to remove second
  const startStr = moment(start).format('MM/DD/YYYY HH:mm')
  const endStr = moment(end).format('MM/DD/YYYY HH:mm')
  const currentStr = moment(current).format('MM/DD/YYYY HH:mm')
  const mStart = moment(startStr)
  const mEnd = moment(endStr)
  const mCurrent = moment(currentStr)
  return mStart.isBefore(mCurrent) && mEnd.isAfter(mCurrent)
}

export function isSame(timeA, timeB) {
  const timeAStr = moment(timeA).format('MM/DD/YYYY HH:mm')
  const timeBStr = moment(timeB).format('MM/DD/YYYY HH:mm')
  const mTimeA = moment(timeAStr)
  const mTimeB = moment(timeBStr)

  return mTimeA.isSame(mTimeB)
}

export function renderImage(fileUrl, leter?) {
  const firstLetter = getFirstLetterAndUpperCase(leter || 'G')
  return <Avatar src={fileUrl}>{firstLetter}</Avatar>
}

export function renderGender(value) {
  return <>{value ? <ManOutlined /> : <WomanOutlined />}</>
}

export function renderOptions(options, log?, showTooltip?) {
  if (log) {
    console.log(options)
  }
  if (showTooltip === true) {
    return (options || []).map((option, index) => (
      <Option key={index} value={option.value || option.id}>
        <Tooltip title={option.label || option.name}>
          {option.label || option.name}
        </Tooltip>
      </Option>
    ))
  } else {
    return (options || []).map((option, index) => (
      <Option key={index} value={option?.value || option?.id}>
        {option?.label || option?.name || option?.code}
      </Option>
    ))
  }
}
export function renderCustomerOptions(options, log?, showTooltip?) {
  if (log) {
    console.log(options)
  }
  return (options || []).map((option, index) => (
    <Option key={index} value={option.id}>
      {showTooltip ? (
        <Tooltip title={`${option.phoneNumber} - ${option.emailAddress}`}>
          {option.displayName}
        </Tooltip>
      ) : (
        option.displayName
      )}
    </Option>
  ))
}

export function renderDate(value) {
  if (value) {
    // TODO using global format
    value = moment(value).format('DD/MM/YYYY')
  }

  return value
}

export function renderDateTime(value) {
  if (value) {
    // TODO using global format
    value = moment(value).format('DD/MM/YYYY HH:mm')
  }

  return value
}

export function renderTime(value) {
  if (value) {
    // TODO using global format
    value = moment(value).format('HH:mm')
  }

  return value
}

export function renderIsActive(value) {
  return value === true ? (
    <Tooltip title={L('ACTIVE')}>
      <Badge status="success" className="badge-without-text" />
    </Tooltip>
  ) : (
    <Tooltip title={L('INACTIVE')}>
      <Badge status="error" className="badge-without-text" />
    </Tooltip>
  )
}

export function renderTag(value, color) {
  return (
    <Tag className="cell-round mr-0" color={color}>
      {value}
    </Tag>
  )
}

export function compressImage(file, maxSize) {
  const image = new Image()
  const canvas = document.createElement('canvas')
  const dataURItoBlob = function (dataURI) {
    const bytes =
      dataURI.split(',')[0].indexOf('base64') >= 0
        ? atob(dataURI.split(',')[1])
        : unescape(dataURI.split(',')[1])
    const mime = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const max = bytes.length
    const ia = new Uint8Array(max)
    for (let i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i)
    return new Blob([ia], { type: mime })
  }
  const reader = new FileReader()
  const resize = function () {
    let width = image.width
    let height = image.height
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width
        width = maxSize
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height
        height = maxSize
      }
    }
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d')?.drawImage(image, 0, 0, width, height)
    const dataUrl = canvas.toDataURL('image/jpeg')
    return dataURItoBlob(dataUrl)
  }
  return new Promise(function (ok, no) {
    if (!file.type.match(/image.*/)) {
      no(new Error('Not an image'))
      return
    }
    reader.onload = function (readerEvent) {
      image.onload = function () {
        return ok(resize())
      }
      image.src = readerEvent.target?.result as string
    }
    reader.readAsDataURL(file)
  })
}

export function prepareLinkQueryString(params, url) {
  if (!isObjectUndefinedOrNull(params)) {
    let index = 0
    let query = ''
    Object.keys(params).forEach((key) => {
      const bullet = index === 0 ? '?' : '&'
      let value = params[key]
      if (Array.isArray(params[key])) {
        value = ''
        params[key].forEach((item) => {
          value += (value.length ? '&' : '') + `${key}=${item}`
        })
        query = query + bullet + value
      } else {
        query = query + bullet + key + '=' + value
      }
      index++
    })

    return url + query
  }
  return url
}

export function image2Base64(img: File | Blob | undefined) {
  if (!img) {
    return Promise.resolve('')
  }
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result))
    reader.readAsDataURL(img)
  })
}

export function getLocalLocale() {
  // ts trick to avoid type checking
  const _navigator: any = navigator
  return (
    _navigator.userLanguage ||
    (navigator.languages &&
      navigator.languages.length &&
      navigator.languages[0]) ||
    navigator.language ||
    _navigator.browserLanguage ||
    _navigator.systemLanguage ||
    'en'
  )
}

export function formatCurrency(
  val: string | number,
  locale?: string,
  currency = 'VND'
) {
  const convertedNum = Number(val)
  if (isNaN(convertedNum)) return val

  const _locale = locale || getLocalLocale()

  return new Intl.NumberFormat(_locale, { style: 'currency', currency }).format(
    convertedNum
  )
}

export function formatCryptoCurrency(
  val: string | number,
  locale?: string,
  symbol = ''
) {
  const convertedNum = Number(val)
  if (isNaN(convertedNum)) return ''

  return formatNumber(convertedNum, locale) + symbol
}

export function formatNumber(val: string | number, locale = 'vi') {
  const convertedNum = Number(val)
  if (isNaN(convertedNum)) return ''

  const _locale = locale || getLocalLocale()

  return new Intl.NumberFormat(_locale).format(convertedNum)
}

export function formatPercentage(val: string | number) {
  const convertedNum = Number(val)
  if (isNaN(convertedNum)) return ''

  return formatNumber(convertedNum * 100) + '%'
}

export function inputCurrencyFormatter(value, symbol = 'đ') {
  if (!value) {
    return ''
  }
  return `${symbol} ${(value + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

export function inputCurrencyParse(value, symbol = 'đ') {
  return value
    .replace(symbol, '')
    .replace(' ', '')
    .replace(/\$\s?|(,*)/g, '')
}

export function inputNumberFormatter(value) {
  return `${(value + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}

export function inputNumberParse(value) {
  return value.replace(/\$\s?|(,*)/g, '')
}

export function inputFormatNumber(num) {
  return num.toString().replace(/^[+-]?\d+/, function (int) {
    return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })
}

export function inputPercentageFormatter(value, symbol = '') {
  if (!(value + '').length) {
    return value
  }
  if (symbol?.length) {
    return `${inputFormatNumber(value + '')} ${symbol}`
  }
  return inputFormatNumber(value + '')
}

export function inputPercentageParse(value, symbol = '') {
  if (!(value + '').length) {
    return value
  }
  return value
    .replace(symbol, '')
    .replace(' ', '')
    .replace(/\$\s?|(,*)/g, '')
}

export function compactObject(obj) {
  const keys = Object.keys(obj)
  return keys.reduce((result, key) => {
    if (obj[key]) result[key] = obj[key]
    return result
  }, {})
}

export const apyToPercentage = (apyDecimal) => {
  return (apyDecimal * 100).toFixed()
}

export const percentageToApy = (apyPercent) => {
  return (apyPercent / 100).toString()
}

export const getCursortPositionAfterFormatNumber = (
  e,
  num,
  commaCount,
  setCommaCount
) => {
  const element = e.target
  const totalCommas = (num.match(/,/g) || []).length
  let cursor = e.target.selectionStart
  if (commaCount > totalCommas) {
    //shift cursor to the left (a comma was removed)
    setCommaCount(commaCount - 1)
    cursor--
  } else if (commaCount < totalCommas) {
    // shift cursor to the right (a comma was added)
    setCommaCount(commaCount + 1)
    cursor++
  }

  window.requestAnimationFrame(() => {
    element.selectionStart = cursor
    element.selectionEnd = cursor
  })
}

export const numberExponentToLarge = (numIn) => {
  if (numIn === undefined || numIn === null) {
    return ''
  }
  numIn += '' // To cater to numric entries
  let sign = '' // To remember the number sign
  numIn.charAt(0) == '-' && ((numIn = numIn.substring(1)), (sign = '-')) // remove - sign & remember it
  let str = numIn.split(/[eE]/g) // Split numberic string at e or E
  if (str.length < 2) return sign + numIn // Not an Exponent Number? Exit with orginal Num back
  const power = str[1] // Get Exponent (Power) (could be + or -)

  const deciSp = (1.1).toLocaleString().substring(1, 2) // Get Deciaml Separator
  str = str[0].split(deciSp) // Split the Base Number into LH and RH at the decimal point
  let baseRH = str[1] || '', // RH Base part. Make sure we have a RH fraction else ""
    baseLH = str[0] // LH base part.

  if (power >= 0) {
    // ------- Positive Exponents (Process the RH Base Part)
    if (power > baseRH.length) baseRH += '0'.repeat(power - baseRH.length) // Pad with "0" at RH
    baseRH = baseRH.slice(0, power) + deciSp + baseRH.slice(power) // Insert decSep at the correct place into RH base
    if (baseRH.charAt(baseRH.length - 1) == deciSp) baseRH = baseRH.slice(0, -1) // If decSep at RH end? => remove it
  } else {
    // ------- Negative exponents (Process the LH Base Part)
    const num = Math.abs(power) - baseLH.length // Delta necessary 0's
    if (num > 0) baseLH = '0'.repeat(num) + baseLH // Pad with "0" at LH
    baseLH = baseLH.slice(0, power) + deciSp + baseLH.slice(power) // Insert "." at the correct place into LH base
    if (baseLH.charAt(0) == deciSp) baseLH = '0' + baseLH // If decSep at LH most? => add "0"
  }
  // Rremove leading and trailing 0's and Return the long number (with sign)
  return sign + (baseLH + baseRH).replace(/^0*(\d+|\d+\.\d+?)\.?0*$/, '$1')
}
