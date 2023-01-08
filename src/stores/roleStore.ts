import { action, observable } from 'mobx'

import type { CreateRoleInput } from '../services/role/dto/createRoleInput'
import { EntityDto } from '../services/dto/entityDto'
import { GetAllPermissionsOutput } from '../services/role/dto/getAllPermissionsOutput'
import type { GetAllRoleOutput } from '../services/role/dto/getAllRoleOutput'
import type { GetRoleAsyncInput } from '../services/role/dto/getRolesAsyncInput'
import type { PagedResultDto } from '../services/dto/pagedResultDto'
import type { PagedRoleResultRequestDto } from '../services/role/dto/PagedRoleResultRequestDto'
import RoleEditModel from '../models/Roles/roleEditModel'
import type { UpdateRoleInput } from '../services/role/dto/updateRoleInput'
import roleService from '../services/role/roleService'

class RoleStore {
  @observable roles!: PagedResultDto<GetAllRoleOutput>
  @observable roleEdit: RoleEditModel = new RoleEditModel()
  @observable allPermissions: GetAllPermissionsOutput[] = []

  @action
  async create(createRoleInput: CreateRoleInput) {
    await roleService.create(createRoleInput)
  }

  @action
  async createRole() {
    this.roleEdit = {
      grantedPermissionNames: [],
      role: {
        name: '',
        displayName: '',
        description: '',
        id: 0
      },
      permissions: [{ name: '', displayName: '', description: '' }]
    }
  }

  @action
  async getRolesAsync(getRoleAsyncInput: GetRoleAsyncInput) {
    await roleService.getRolesAsync(getRoleAsyncInput)
  }

  @action
  async update(updateRoleInput: UpdateRoleInput) {
    await roleService.update(updateRoleInput)
    this.roles.list
      .filter((x: GetAllRoleOutput) => x.id === updateRoleInput.id)
      .map(() => {
        return updateRoleInput
      })
  }

  @action
  async delete(entityDto: EntityDto) {
    await roleService.delete(entityDto)
    this.roles.list = this.roles.list.filter(
      (x: GetAllRoleOutput) => x.id !== entityDto.id
    )
  }

  @action
  async getAllPermissions() {
    const result = await roleService.getAllPermissions()
    this.allPermissions = result
  }

  @action
  async getRoleForEdit(entityDto: EntityDto) {
    const result = await roleService.getRoleForEdit(entityDto)
    this.roleEdit.grantedPermissionNames = result.grantedPermissionNames
    this.roleEdit.permissions = result.permissions
    this.roleEdit.role = result.role
  }

  @action
  async get(entityDto: EntityDto) {
    const result = await roleService.get(entityDto)
    this.roles = result.data.result
  }

  @action
  async getAll(pagedFilterAndSortedRequest: PagedRoleResultRequestDto) {
    const result = await roleService.getAll(pagedFilterAndSortedRequest)
    this.roles = result
  }
}

export default RoleStore
