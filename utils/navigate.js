export const navigateTo = (ref, name, params) => {
  ref.current && ref.current.navigate(name, {...params});
};

export const setParamsTo = (ref, params) => {
  ref.current && ref.current.setParams({...params});
};
