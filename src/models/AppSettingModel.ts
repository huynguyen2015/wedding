class AppSettingModel {
  multiTenancy!: any
  session!: any
  localization!: any
  features!: number
  auth: any
  nav: any
  setting: any
  clock: any
  timing: any
  security: any
  custom: any

  constructor(translateValues?) {
    const _translateValues = translateValues || {
      MainMenu: {},
      Error: {},
      Label: {}
    }
    this.auth = { allPermissions: [], grantedPermissions: [] }
    this.clock = { provider: 'utcClockProvider' }
    this.timing = {
      timeZoneInfo: {
        windows: {
          timeZoneId: 'SE Asia Standard Time',
          baseUtcOffsetInMilliseconds: 25200000,
          currentUtcOffsetInMilliseconds: 25200000,
          isDaylightSavingTimeNow: false
        },
        iana: {
          timeZoneId: 'Asia/Bangkok'
        }
      }
    }
    this.localization = {
      currentCulture: {
        name: 'en',
        displayName: 'English'
      },
      languages: [
        {
          name: 'en',
          displayName: 'English',
          icon: 'famfamfam-flags gb',
          isDefault: true,
          isDisabled: false,
          isRightToLeft: false
        }
      ],
      currentLanguage: {
        name: 'en',
        displayName: 'English',
        icon: 'famfamfam-flags gb',
        isDefault: true,
        isDisabled: false,
        isRightToLeft: false
      },
      sources: [
        {
          name: 'Error',
          type: 'MultiTenantLocalizationSource'
        },
        {
          name: 'Label',
          type: 'MultiTenantLocalizationSource'
        },
        {
          name: 'MainMenu',
          type: 'MultiTenantLocalizationSource'
        },
        {
          name: 'Notification',
          type: 'MultiTenantLocalizationSource'
        }
      ],
      values: _translateValues
    }
  }
}

export default AppSettingModel
