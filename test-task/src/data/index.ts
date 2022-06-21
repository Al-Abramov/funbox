import { DataInterface } from './data.interface';

export const data: DataInterface[] = [
  {
    id: 1,
    weight: 0.5,
    count: 10,
    filling: 'с фуа-гра',
    portionCount: 10,
    promo: 'мышь в подарок',
    activeDescription: 'Печень утки разварная с артишоками.',
  },
  {
    id: 2,
    weight: 2,
    count: 10,
    filling: 'с рыбой',
    portionCount: 40,
    promo: '2 мыши в подарок',
    activeDescription: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: 3,
    weight: 5,
    count: 0,
    filling: 'с курой',
    portionCount: 100,
    promo: '5 мышей в подарок заказчик доволен',
    activeDescription: 'Филе из цыплят с трюфелями в бульоне.',
  },
];
