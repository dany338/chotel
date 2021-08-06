import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { Result } from '../../shared/application/result.interface';
import { RoomModel } from '../domain/room.model';
import { RoomRepository } from './room.repository';

export class RoomUseCase extends UseCaseRepository<
  RoomModel,
  RoomRepository
> {
  constructor(public operation: RoomRepository) {
    super(operation);
  }

  async listRoomsByUser(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<RoomModel>> {
    return this.operation.listRoomsByUser(where, relations, order);
  }
}
