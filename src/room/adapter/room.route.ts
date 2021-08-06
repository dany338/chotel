import express from 'express';
import { RoleController } from './room.controller';
import { Validators } from '../../shared/adapter/validator';
import { schemas } from './room.schema';
import { ErrorHandler } from '../../helper/errors.handler';
import { AuthenticationGuard } from '../../shared/infraestructure/guards/authentication.guard';
import { AuthorizationGuard } from '../../shared/infraestructure/guards/authorization.guard';
import { RoomOperation } from '../infraestructure/room.operation';
import { RoomUseCase } from '../application/room.usecase';

const operation = new RoomOperation();
const useCase = new RoomUseCase(operation);
const controller = new RoleController(useCase);
const route = express.Router();

route.get(
  '/',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  controller.list.bind(controller)
);
route.get(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.LIST_ONE),
  controller.listOne.bind(controller)
);
route.get(
  '/page/:page',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.LIST_BY_PAGE),
  controller.listByPage.bind(controller)
);
route.post(
  '/',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.INSERT),
  ErrorHandler.asyncError(controller.insert.bind(controller))
);
route.put(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.UPDATE),
  controller.update.bind(controller)
);
route.delete(
  '/:id',
  AuthenticationGuard.canActivate,
  AuthorizationGuard.canActivate('ADMIN'),
  Validators.validate(schemas.REMOVE),
  controller.remove.bind(controller)
);

export { route };
