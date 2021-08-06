/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import { UserModel } from '../domain/user.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { UserRepository } from '../application/user.repository';
import { User } from '../../entities/user.entity';
import { Result } from '../../shared/application/result.interface';
import { OperationService } from '../../shared/infraestructure/operation.service';
import { getRepository, Repository } from 'typeorm';
import { ResponseDto } from '../../helper/response.dto';
// Operaciones basicas para la base de datos
export class UserOperation
  extends OperationRepository<UserModel>
  implements UserRepository { // al invertir esta dependencia no voy a tener problemas en la capa de aplicacion 
  constructor() {
    super(User); // User es la entidad
  }

  // ya tengo un metodo cifrado y que define los principios de SOLID
  async insertCipher(entity: UserModel): Promise<Result<UserModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<User> = getRepository(User);
    const data: UserModel = await repository.save(entity);
    console.log(data, entity);
    return ResponseDto.format(trace, data);
  }
}
