import { RepositoryBase } from '../../shared/application/base.repository';
import { Result } from '../../shared/application/result.interface';
import { RoomModel } from '../domain/room.model';

export interface RoomRepository extends RepositoryBase<RoomModel> {
  listRoomsByUser(
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<RoomModel>>;
}
