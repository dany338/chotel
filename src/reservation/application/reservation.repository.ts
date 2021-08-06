import { RepositoryBase } from '../../shared/application/base.repository';
import { Result } from '../../shared/application/result.interface';
import { ReservationModel } from '../domain/reservation.model';

export interface ReservationRepository extends RepositoryBase<ReservationModel> {
  listReservationsByAgent(
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<ReservationModel>>;

  searchByName(
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<ReservationModel>>;

  getValidation(
    id: number,
    where: object[],
    relations: string[],
    order: object
  ): Promise<Result<ReservationModel>>;
}
