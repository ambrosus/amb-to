const convertStyles = (styles: object): object => {
  const newStyles = {};
  Object.keys(styles).map((key: string) => {
    const nameArray = key.split('-');
    const styleName = nameArray.reduce((name: string, data: string, index: number) => {
      if (index > 0) {
        return `${name}${capitalize(data)}`;
      }
      return data;
    }, '');
    newStyles[styleName] = styles[key];
  });
  return newStyles;
};

const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export default convertStyles;
