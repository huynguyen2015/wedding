import AppConsts from './appconst'
const { localization } = AppConsts
declare const abp: any

export function L(key: string, ...args: any[]): string {
  let localizedText = abp.localization?.localize(
    key,
    AppConsts.localization.defaultLocalizationSourceName
  )
  if (!localizedText) {
    localizedText = key
  }

  if (!args || !args.length) {
    return localizedText
  }

  return abp.utils.formatString(localizedText, ...args)
}

export function LError(key: string, ...args: any[]): string {
  let localizedText = abp.localization?.localize(
    key,
    localization.sourceWebError
  )
  if (!localizedText) {
    localizedText = key
  }

  if (!args || !args.length) {
    return localizedText
  }

  return abp.utils?.formatString(localizedText, ...args)
}

export function LNotification(key: string, ...args: any[]): string {
  let localizedText = abp.localization?.localize(
    key,
    localization.sourceWebNotification
  )
  if (!localizedText) {
    localizedText = key
  }

  if (!args || !args.length) {
    return localizedText
  }

  return abp.utils.formatString(localizedText, ...args)
}

export function LCategory(key: string, ...args: any[]): string {
  let localizedText = abp.localization.localize(
    key,
    localization.sourceWebCategory
  )
  if (!localizedText) {
    localizedText = key
  }

  if (!args || !args.length) {
    return localizedText
  }

  return abp.utils.formatString(localizedText, ...args)
}

export function LMainMenu(key: string, ...args: any[]): string {
  let localizedText = abp.localization.localize(
    key,
    localization.sourceWebMainMenu
  )

  if (!localizedText) {
    localizedText = key
  }

  if (!args || !args.length) {
    return localizedText
  }

  return abp.utils.formatString(localizedText, ...args)
}

export function isGranted(permissionName: string): boolean {
  if (!permissionName || permissionName === '') {
    return true
  }
  return abp.auth?.isGranted(permissionName)
}

export function isGrantedAny(...args: string[]): boolean {
  for (let i = 0; i < args.length; i++) {
    if (isGranted(args[i])) {
      return true
    }
  }
  return false
}
