import { DataInterface } from '../data/data.interface';

export function normalizeData(data: DataInterface[]) {
  data.forEach((elem) => {
    elem.weight = elem.weight.toString().split('.').join(',');
  });
}
