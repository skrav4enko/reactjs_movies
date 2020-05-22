export const parseList = (response: any, code: number): any[] => {
  if (response.status !== code) throw Error(response.message);
  let list = response.data && response.data.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response: any, code: number): any => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};
