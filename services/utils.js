export const getDeepCopy = (val) => JSON.parse(JSON.stringify(val));

export const getDataFromLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

export const setDataToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
