import { UseCaseRepository } from '../../shared/application/usecase.repository';
import { Result } from '../../shared/application/result.interface';
import { ReservationModel } from '../domain/reservation.model';
import { ReservationRepository } from './reservation.repository';

export class ReservationUseCase extends UseCaseRepository<ReservationModel, ReservationRepository> {
  [x: string]: any;
  constructor(public operation: ReservationRepository) {
    super(operation);
  }

  async listReservationsByAgent(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<ReservationModel>> {
    return this.operation.listReservationsByAgent(where, relations, order);
  }

  async searchByName(
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<ReservationModel>> {
    return this.operation.searchByName(where, relations, order);
  }

  async getValidation(
    id: number,
    where: object[] = [],
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<ReservationModel>> {
    return this.operation.getValidation(id, where, relations, order);
  }
}
