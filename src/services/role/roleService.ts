import { CreateRoleInput } from './dto/createRoleInput'
import { CreateRoleOutput } from './dto/createRoleOutput'
import { EntityDto } from '../dto/entityDto'
import { GetAllRoleOutput } from './dto/getAllRoleOutput'
import { GetRoleAsyncInput } from './dto/getRolesAsyncInput'
import GetRoleAsyncOutput from './dto/getRoleAsyncOutput'
import { GetRoleForEditOutput } from './dto/getRoleForEditOutput'
import type { PagedResultDto } from '../dto/pagedResultDto'
import type { PagedRoleResultRequestDto } from './dto/PagedRoleResultRequestDto'
import { UpdateRoleInput } from './dto/updateRoleInput'
import { UpdateRoleOutput } from './dto/updateRoleOutput'
import http from '../httpService'

class RoleService {
  public async create(
    createRoleInput: CreateRoleInput
  ): Promise<PagedResultDto<CreateRoleOutput>> {
    const result = await http.post(
      'api/services/app/Role/Create',
      createRoleInput
    )
    return result
  }

  public async getRolesAsync(
    getRoleAsyncInput: GetRoleAsyncInput
  ): Promise<GetRoleAsyncOutput> {
    const result = await http.get('api/services/app/Role/GetRolesAsync', {
      params: getRoleAsyncInput
    })
    return result
  }

  public async update(
    updateRoleInput: UpdateRoleInput
  ): Promise<UpdateRoleOutput> {
    const result = await http.put(
      'api/services/app/Role/Update',
      updateRoleInput
    )
    return result as UpdateRoleOutput
  }

  public async delete(entityDto: EntityDto) {
    const result = await http.delete('api/services/app/Role/Delete', {
      params: entityDto
    })
    return result
  }

  public async getAllPermissions() {
    const result = await http.get('api/services/app/Role/GetAllPermissions')
    return result.items
  }

  public async getRoleForEdit(
    entityDto: EntityDto
  ): Promise<GetRoleForEditOutput> {
    const result = await http.get('api/services/app/Role/GetRoleForEdit', {
      params: entityDto
    })
    return result
  }

  public async get(entityDto: EntityDto) {
    const result = await http.get('api/services/app/Role/Get', {
      params: entityDto
    })
    return result
  }

  public async getAll(
    pagedFilterAndSortedRequest: PagedRoleResultRequestDto
  ): Promise<PagedResultDto<GetAllRoleOutput>> {
    const result = await http.get('api/services/app/Role/GetAll', {
      params: pagedFilterAndSortedRequest
    })
    return result
  }
}

export default new RoleService()
