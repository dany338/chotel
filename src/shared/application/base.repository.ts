import { Result } from './result.interface';
// los casos de uso genericos
// El segundo principio de abierto cerrado habla de clases pero tambien se aplica a interfaces, el cuarto principio de solid habla de la segregación de clases
export interface RepositoryBase<T> {
  list(where: object, relations: string[], order: object): Promise<Result<T>>;
  listOne(where: object, relations: string[]): Promise<Result<T>>;
  listByPage(
    page: number,
    pageSize: number,
    where: object,
    relations: string[],
    order: object
  ): Promise<Result<T>>;
  insert(entity: Partial<T>): Promise<Result<T>>;
  update(entity: T, where: object, relations: string[]): Promise<Result<T>>;
  remove(where: object): Promise<Result<T>>;
}
