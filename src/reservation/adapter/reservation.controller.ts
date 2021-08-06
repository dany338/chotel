/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { Like } from 'typeorm';
import { reservationUseCase } from '../application/reservation.usecase';
import { reservationModel } from '../domain/reservation.model';

export class RoleController {
  constructor(private useCase: reservationUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list();
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const reservation: Partial<reservationModel> = { id };
    const result = await this.useCase.listOne(reservation);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const params = req.params;
    const page = +params.page;
    const result = await this.useCase.listByPage(page, 20);
    res.json(result);
  }

  async listreservationsByAgent(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const agent = +params.agent;
    const where: object[] = [{ agent }];
    const result = await this.useCase.listreservationsByAgent(where);
    res.json(result);
  }

  async searchByName(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const where = [
      { firstname: Like(`%${body.firstname}%`) },
      { lastname: Like(`%${body.lastname}%`) },
      { idcard: body.idcard },
    ]; // Querying with OR operator:
    const result = await this.useCase.searchByName(where);
    res.json(result);
  }

  async getValidation(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const id = +params.id;
    const where: object[] = [{ id }];
    const relations: string[] = ['judicials'];
    const result = await this.useCase.getValidation(id, where, relations);
    res.json(result);
  }

  async insert(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const reservation: reservationModel = {
      firstname: body.firstname,
      lastname: body.lastname,
      idcard: body.idcard,
      agent: body.agent,
    };
    const result = await this.useCase.insert(reservation);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const user: reservationModel = body;
    const id = +params.id;

    const result = await this.useCase.update(user, { id });
    res.json(result);
  }

  async remove(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const result = await this.useCase.remove({ id });
    res.json(result);
  }
}
