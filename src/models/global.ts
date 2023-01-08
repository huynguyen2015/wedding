import { v4 as uuid } from 'uuid'

export interface NoticeIconData {
  avatar?: string | React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  datetime?: React.ReactNode
  extra?: React.ReactNode
  style?: React.CSSProperties
  key?: string | number
  read?: boolean
}

export interface NoticeItem extends NoticeIconData {
  id: string
  type: string
  status: string
}

/* Option item */
export class OptionModel {
  id: number
  value: string
  label: string
  code: string
  icon?: string
  constructor(value?, label?, id?, code?) {
    this.id = id
    this.value = value
    this.label = label
    this.code = code
  }

  public static assign(obj) {
    if (!obj) return undefined

    const newObj = Object.assign(new OptionModel(), obj)
    newObj.label = obj.label || obj.name || obj.displayName
    newObj.value = obj.value || obj.id || obj.code
    return newObj
  }

  public static assigns(objs) {
    const results: any[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }
}

/* Statistic Item */
export class StatisticDetail {
  value: number
  label: string
  constructor(value?, label?) {
    this.value = value
    this.label = label
  }
}

/* Multi language input */
export interface ILanguageValue {
  id: number
  key?: string
  languageName: string
  value: string
  icon: string
}

export class LanguageValue implements ILanguageValue {
  id: number
  key?: string
  languageName: string
  value: string
  icon: string
  constructor(languageName?, value?, id?, icon?) {
    this.id = id
    this.key = uuid()
    this.languageName = languageName
    this.value = value
    this.icon = icon
  }

  public static assign(obj) {
    if (!obj) return undefined

    return Object.assign(new LanguageValue(), obj)
  }

  public static assigns(objs) {
    const results: any[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }

  public static init(value) {
    if (!value || !(value instanceof Array)) {
      return (abp.localization.languages || []).map((lang) => {
        return new LanguageValue(lang.name, '', undefined, lang.icon)
      })
    }

    return (abp.localization.languages || []).map((lang) => {
      const languageValue = value.find(
        (item) => item.languageName === lang.name
      )
      return new LanguageValue(
        languageValue?.languageName || lang.name,
        languageValue?.value,
        languageValue?.id,
        lang.icon
      )
    })
  }
}

/* Status */
export interface IStatus {
  id: number
  name: string
  code?: string
  colorCode: string
  borderColorCode: string
}

export class Status implements IStatus {
  id: number
  name: string
  code?: string
  colorCode: string
  borderColorCode: string

  constructor(name?, colorCode?) {
    this.id = 0
    this.name = name || ''
    this.colorCode = colorCode || ''
    this.borderColorCode = ''
  }

  public static assign(obj) {
    if (!obj) return undefined

    const newObj = Object.assign(new Status(), obj)
    return newObj
  }

  public static assigns(objs) {
    const results: Status[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }
}

/* PROJECT SETTING CONFIGURATION */
export interface IAppSettingConfiguration {
  isReminderCreateFeePackage: boolean
}

export class AppSettingConfiguration implements IAppSettingConfiguration {
  isReminderCreateFeePackage: boolean

  constructor() {
    this.isReminderCreateFeePackage = false
  }

  public static assign(obj) {
    if (!obj) return undefined

    const newObj = Object.assign(new AppSettingConfiguration(), obj)
    return newObj
  }
}
