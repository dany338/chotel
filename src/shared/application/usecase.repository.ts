/* eslint-disable no-useless-constructor */
import { RepositoryBase } from './base.repository';
import { Result } from './result.interface';
// la clase UseCaseRepository tiene dos tipos de datos genericos U es un tipo que esta herando de RepositoryBase que a su vez esta con el tipo T
// no tengo que estar creando cada caso de uso por cada entidad salvo que existan otros diferentes a los comunes
// se usa esta clase intermedia porque no siempre mis casos de uso van caber dentro de lo que esta eh RepositoryBase
// Esta clase y la otra de RepositoryBase estan hechas para aumentar la productividad
export class UseCaseRepository<T, U extends RepositoryBase<T>> {
  constructor(public operation: U) {}

  async list(
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    return await this.operation.list(where, relations, order);
  }

  async listOne(
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    return await this.operation.listOne(where, relations);
  }

  async listByPage(
    page: number,
    pageSize: number,
    where: object = {},
    relations: string[] = [],
    order: object = {}
  ): Promise<Result<T>> {
    return await this.operation.listByPage(
      page,
      pageSize,
      where,
      relations,
      order
    );
  }

  async insert(entity: T): Promise<Result<T>> {
    return await this.operation.insert(entity);
  }

  async update(
    entity: T,
    where: object = {},
    relations: string[] = []
  ): Promise<Result<T>> {
    return await this.operation.update(entity, where, relations);
  }

  async remove(where: object): Promise<Result<T>> {
    return await this.operation.remove(where);
  }
}
