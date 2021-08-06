/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-vars */
export class ResponseDto<T> {
  static format(trace: string, data: any, total: number = null) {
    if (total || total === 0) {
      return { trace, payload: { data, total } };
    }
    return { trace, payload: { data } };
  }

  static randomScore(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
