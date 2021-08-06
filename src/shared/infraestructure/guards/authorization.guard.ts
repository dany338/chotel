/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextFunction, Request, Response } from 'express';
import { IError } from '../../../helper/errors.handler';

export class AuthorizationGuard {
  static canActivate(...rolesAllowed: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { roles } = res.locals.payload;
      console.log('roles', roles, res.locals.payload);
      let roleMatched = true;

      for (const role of roles) {
        if (rolesAllowed.indexOf(role) > -1) {
          roleMatched = true;
          next();
          break;
        }
      }

      if (!roleMatched) {
        const error: IError = new Error('No tiene los privilegios');
        error.status = 401;
        return next(error);
      }
    };
  }
}
