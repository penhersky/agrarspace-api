export const fillArr = (count: number, getObj: any): any[] =>
  new Array(count).fill({}).map(getObj);

export const getRandom = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];
