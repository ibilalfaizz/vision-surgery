export const getData = async (key) => {
  const jsonValue = localStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
export const getStringData = async (key) => {
  const jsonValue = localStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const storeData = async (key, value) => {
  const jsonValue = localStorage.setItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const storeStringData = async (key, value) => {
  const jsonValue = localStorage.setItem(key, value);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
