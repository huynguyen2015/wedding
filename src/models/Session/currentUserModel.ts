class CurrentUserModel {
  id: number
  email?: string
  username?: string
  permitted_actions!: any

  constructor() {
    this.id = 0
  }

  public static assign(obj) {
    if (!obj) return undefined

    const newObj = Object.assign(new CurrentUserModel(), obj)
    newObj.permitted_actions = (obj.permitted_actions || []).reduce(
      (data, permission) => {
        data[permission] = true
        return data
      },
      {}
    )
    return newObj
  }

  public static assigns(objs) {
    const results: any[] = []
    objs.forEach((item) => results.push(this.assign(item)))
    return results
  }
}

export default CurrentUserModel
