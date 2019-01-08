const toggleMenu = (event: any) => {
  event.preventDefault();
  const parent = event.currentTarget.parentElement;
  parent.classList.toggle('menu--active');
};

const valueJSON = (value: any) => {
    return value.replace(/["{}\[\]]/g, '').replace(/^\s+/m, '');
  }

const isObject = (value: any) => {
    if ((typeof value === "object") && (value !== null)) {
      return true;
    }
    return false;
  }

export {
    toggleMenu,
    valueJSON,
    isObject
}