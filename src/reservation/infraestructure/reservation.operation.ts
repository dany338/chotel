/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { ReservationModel } from '../domain/reservation.model';
import { OperationRepository } from '../../shared/infraestructure/operation.repository';
import { ReservationRepository } from '../application/reservation.repository';
import { Reservation } from '../../entities/reservation.entity';
import { Result } from '../../shared/application/result.interface';
import { OperationService } from '../../shared/infraestructure/operation.service';
import { getRepository, Repository } from 'typeorm';
import { ResponseDto } from '../../helper/response.dto';

export class ReservationOperation
  extends OperationRepository<ReservationModel>
  implements ReservationRepository {
  constructor() {
    super(Reservation);
  }

  async listReservationsByAgent(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<ReservationModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Reservation> = getRepository(Reservation);
    const data: ReservationModel[] = await repository.find({ where, relations, order });
    console.log('listReservationsByAgent', data);
    return ResponseDto.format(trace, data);
  }

  async searchByName(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<ReservationModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Reservation> = getRepository(Reservation);
    const data: ReservationModel[] = await repository.find({ where, relations, order });
    console.log('searchByName', data);
    return ResponseDto.format(trace, data);
  }

  async getValidation(
    id: number,
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<ReservationModel>> {
    const trace: string = OperationService.getTrace();
    const repository: Repository<Reservation> = getRepository(Reservation);
    const data: ReservationModel = await repository.findOne({ where, relations, order });
    if(data) {
      data.score = data.judicials.length > 0 ? 0 : ResponseDto.randomScore(1, 100);
    }
    console.log('getValidation', data);
    return ResponseDto.format(trace, data);
  }
}
