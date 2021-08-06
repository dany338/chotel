/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { v4 as uuidv4 } from 'uuid';

export class OperationService {
  static getTrace() {
    return uuidv4();
  }
}
