import faker from 'faker';

export const fillArr = (count: number, getObj: any): any[] =>
  new Array(count).fill({}).map(getObj);

export const getRandom = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const randomIntFromInterval = (min: number, max: number) =>
  faker.datatype.number({ max, min });
