import { useState } from "react";

export const useButton = () => {
  const [counter, setCounter] = useState<number>(0);
  const handlerCounter = () => {
    setCounter((counter) => counter + 1);
  };
  return { counter, handlerCounter };
};

export const useLocalStorage = (storage: Storage = localStorage) => {
  const getAll = () => {
    const keys = Object.keys(storage);
    const objData: { [key: string]: unknown } = {};
    for (const key of keys) {
      const data = storage.getItem(key);
      if (data) {
        objData[key] = JSON.parse(data);
      }
    }
    return JSON.stringify(objData);
  };
  const get = (dataName: string) => {
    if (storage.getItem(dataName)) {
      const data = storage.getItem(dataName);
      if (data) {
        return JSON.parse(data);
      }
    }
  };
  const set = (dataName: string, data: unknown) => {
    if (data) {
      storage.setItem(dataName, JSON.stringify(data));
    }
  };
  const deleteItem = (dataName: string) => {
    storage.removeItem(dataName);
  };
  return { getAll, get, set, deleteItem };
};
