const toggleMenu = (event: any) => {
  event.preventDefault();
  const parent = event.currentTarget.parentElement;
  parent.classList.toggle('menu--active');
};

const valueJSON = (value: any) => {
  return value.replace(/["{}\[\]]/g, '').replace(/^\s+/m, '');
};

const isObject = (value: any) => {
  return value !== null && typeof value === 'object';
};

export {
  toggleMenu,
  valueJSON,
  isObject
};
