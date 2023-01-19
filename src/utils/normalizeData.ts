import { DataInterface } from '../data/data.interface';

export function normalizeData(data: DataInterface[]): DataInterface[] {
  return data.map((elem) => ({ ...elem, weight: elem.weight.toString().split('.').join(',') }));
}
