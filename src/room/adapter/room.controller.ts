/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import { RoomUseCase } from '../application/Room.usecase';
import { RoomModel } from '../domain/room.model';

export class RoleController {
  constructor(private useCase: RoomUseCase) {}

  async list(req: Request, res: Response) {
    const result = await this.useCase.list();
    res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const params = req.params;
    const id = +params.id;
    const Room: Partial<RoomModel> = { id };
    const result = await this.useCase.listOne(Room);
    res.json(result);
  }

  async listByPage(req: Request, res: Response) {
    const params = req.params;
    const page = +params.page;
    const result = await this.useCase.listByPage(page, 20);
    res.json(result);
  }

  async listRoomsByUser(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const user = +params.user;
    const where: object[] = [{ user }];
    const result = await this.useCase.listRoomsByUser(where);
    res.json(result);
  }

  async insert(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const Room: RoomModel = {
      type: body.type,
      beds: body.beds,
      code: body.code,
    };
    const result = await this.useCase.insert(Room);
    res.json(result);
  }

  async update(req: Request, res: Response) {
    const params = req.params;
    const body = req.body;

    const user: RoomModel = body;
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
