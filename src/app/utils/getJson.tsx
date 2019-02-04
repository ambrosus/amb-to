const valueJSON = (value: any) => {
  return value.replace(/["{}\[\]]/g, '').replace(/^\s+/m, '');
};

export default valueJSON;
