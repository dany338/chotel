/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { RoomModel } from '../domain/room.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { RoomRepository } from '../application/room.repository';
import { Room } from '../../entities/room.entity';
import { Result } from '../../shared/application/result.interface';
import { OperationService } from '../../shared/infraestructure/operation.service';
import { getRepository, Repository } from 'typeorm';
import { ResponseDto } from '../../helper/response.dto';

export class RoomOperation
  extends OperationRepository<RoomModel>
  implements RoomRepository {
  constructor() {
    super(Room);
  }

  async listRoomsByUser(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<RoomModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Room> = getRepository(Room);
    const data: RoomModel[] = await repository.find({ where, relations, order });
    console.log('listRoomsByUser', data);
    return ResponseDto.format(trace, data);
  }
}
