export const loopExclude = (items: any[], filter: any[]): any[] => {
  if (!items || !filter) {
    return items;
  }
  return Object.entries(items).filter(([key, value]) => {
    if (filter.indexOf(key) < 0) {
      return { key: value };
    }
  });
};

export const loopInclude = (items: any[], filter: any[]): any[] => {
  if (!items || !filter) {
    return items;
  }
  return Object.entries(items).filter(([key, value]) => {
    if (filter.indexOf(key) > -1) {
      return { key, value };
    }
  });
};
