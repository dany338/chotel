import { RoleModel } from '../domain/role.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { RoleRepository } from '../application/role.repository';
import { Role } from '../../entities/role.entity';
export class RoleOperation
  extends OperationRepository<RoleModel>
  implements RoleRepository
{
  constructor() {
    super(Role);
  }
}
