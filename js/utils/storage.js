const STORAGE = {
  get: (key) => {
    return localStorage.getItem(key);
  },
  has: (key) => {
    return localStorage.getItem(key)!=null;
  },
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  setArray: (key, value) => {
    let array = JSON.parse(localStorage.getItem(key));
    if (!array) {
      array = [];
    }
    array.push(value);
    localStorage.setItem(key, JSON.stringify(array));
  },
  getArray: (key) => {
    let array = JSON.parse(localStorage.getItem(key));
    if (!array) {
      array = [];
    }
    return array;
  },
};
export default STORAGE;
