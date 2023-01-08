const AppConsts = {
  align: {
    right: 'right' as const,
    left: 'left' as const,
    center: 'center' as const
  },
  userManagement: {
    defaultAdminUserName: 'admin'
  },
  localization: {
    defaultLocalizationSourceName: 'Label',
    sourceWebNotification: 'Notification',
    sourceWebError: 'Error',
    sourceWebMainMenu: 'MainMenu',
    sourceWebCategory: 'Category'
  },
  authorization: {
    encrptedAuthTokenName: 'enc_auth_token'
  },
  appBaseUrl: process.env.REACT_APP_APP_BASE_URL,
  remoteServiceBaseUrl: process.env.REACT_APP_REMOTE_SERVICE_BASE_URL,

  formVerticalLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
      xl: { span: 24 },
      xxl: { span: 24 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
      xl: { span: 24 },
      xxl: { span: 24 }
    }
  },
  formHorizontalLayout: {
    labelCol: {
      xs: { span: 12 },
      sm: { span: 12 },
      md: { span: 12 },
      lg: { span: 6 },
      xl: { span: 6 },
      xxl: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 12 },
      md: { span: 12 },
      lg: { span: 18 },
      xl: { span: 18 },
      xxl: { span: 20 }
    }
  },
  dataType: {
    string: 'string' as const,
    number: 'number' as const,
    boolean: 'boolean' as const,
    method: 'method' as const,
    regexp: 'regexp' as const,
    integer: 'integer' as const,
    float: 'float' as const,
    object: 'object' as const,
    enum: 'enum' as const,
    date: 'date' as const,
    url: 'url' as const,
    hex: 'hex' as const,
    email: 'email' as const
  },
  loanTypes: {
    fixed: 'FIXED',
    flexible: 'FLEXIBLE'
  }
}
export const appPermissions = {
  // Services
  loan: {
    page: 'ListLoans',
    create: 'CreateFixedLoan',
    update: 'UpdateFixedLoan',
    delete: 'DeleteLoan'
  },
  product: {
    page: 'ListProducts',
    create: 'CreateFixedProduct',
    update: 'UpdateProduct',
    delete: 'DeleteProduct',
    get: 'GetProduct'
  }
}
export const dateFormat = 'DD/MM/YYYY'
export const dateTimeFormat = 'DD/MM/YYYY HH:mm'
export const yearFormat = 'YYYY'
export const timeFormat = 'HH:mm'
export const phoneRegex =
  /^[+]?\(?([0-9]{0,3})?\)?[-. ]?([0-9]{1,3})?[-. ]?([0-9]{1,3})[-. ]?([0-9]{1,5})$/
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const appStatusColors = {
  success: '#689F38',
  error: '#EB7077',
  valid: '#689F38',
  expired: '#CCCCCC'
}
export const backgroundColors = [
  '#FAC51D',
  '#66BD6D',
  '#FAA026',
  '#29BB9C',
  '#E96B56',
  '#55ACD2',
  '#B7332F',
  '#2C83C9',
  '#9166B8',
  '#92E7E8'
]
export default AppConsts
