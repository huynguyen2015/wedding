import { ChangeLanguagaInput } from './dto/changeLanguageInput'
import { CreateOrUpdateUserInput } from './dto/createOrUpdateUserInput'
import { EntityDto } from '../../services/dto/entityDto'
import { GetAllUserOutput } from './dto/getAllUserOutput'
import type { PagedResultDto } from '../../services/dto/pagedResultDto'
import { PagedUserResultRequestDto } from './dto/PagedUserResultRequestDto'
import { UpdateUserInput } from './dto/updateUserInput'
import http from '../httpService'

class UserService {
  public async create(createUserInput: CreateOrUpdateUserInput) {
    const result = await http.post(
      'api/services/app/User/Create',
      createUserInput
    )
    return result
  }

  public async update(updateUserInput: UpdateUserInput) {
    const result = await http.put(
      'api/services/app/User/Update',
      updateUserInput
    )
    return result
  }

  public async delete(entityDto: EntityDto) {
    const result = await http.delete('api/services/app/User/Delete', {
      params: entityDto
    })
    return result
  }

  public async getRoles() {
    const result = await http.get('api/services/app/User/GetRoles')
    return result.items
  }

  public async changeLanguage(changeLanguageInput: ChangeLanguagaInput) {
    const result = await http.post(
      'api/services/app/User/ChangeLanguage',
      changeLanguageInput
    )
    return result
  }

  public async get(entityDto: EntityDto): Promise<CreateOrUpdateUserInput> {
    const result = await http.get('api/services/app/User/Get', {
      params: entityDto
    })
    return result
  }

  public async getAll(
    pagedFilterAndSortedRequest: PagedUserResultRequestDto
  ): Promise<PagedResultDto<GetAllUserOutput>> {
    const result = await http.get('api/services/app/User/GetAll', {
      params: pagedFilterAndSortedRequest
    })
    return result
  }
}

export default new UserService()
