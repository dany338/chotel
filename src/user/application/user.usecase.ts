/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
// especificar los tipos para UseCaseRepository que son UserModel, UserRepository
// tados los casos de uso estan dentro de UseCaseRepository.Si no esta dentro de los casos de uso, nosotros lo podemos implementar o necesitemos sobreescribir algunos de los casos de uso
// esta usando o inyectando un parametro de tipo UserRepository para que, para invertir la independencia con la capa de infraestructura
export class UserUseCase extends UseCaseRepository<UserModel, UserRepository> {
  constructor(
    public operation: UserRepository // modificar de acceso public porque se necesita modificar el metodo generico insert
  ) {
    super(operation);
  }

  // ya tengo un metodo cifrado y que define los principios de SOLID, la idea siempre es mantener las capas separadas sobre todo la de infraestructura y aplicacion
  async insertCipher(entity: UserModel) {
    entity.password = await UserService.cryptPassword(entity.password); // el usuario va a necesitar que el password este cifrado
    entity.refreshToken = UserService.generateRefreshToken();

    const result = await this.operation.insertCipher(entity);
    return result;
  }
}
