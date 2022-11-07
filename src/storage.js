const storage = window.localStorage;

const DEFAULT_VALUE = {
  todos: [],
  completedCount: 0,
  totalCount: 0,
};

export function getItem(key, defaultValue = DEFAULT_VALUE) {
  try {
    const storedValue = storage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (error) {
    console.log(error.message);
    return defaultValue;
  }
}

export function setItem(key, value) {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
}
