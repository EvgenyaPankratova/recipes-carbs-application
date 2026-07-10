"use client";

import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const json = localStorage.getItem(key);
      if (json) {
        setValue(JSON.parse(json));
      }
    } catch (error) {
      console.error(`Ошибка чтения localStorage по ключу "${key}":`, error);
    }
    setIsInitialized(true);
  }, [key]);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Ошибка записи в localStorage по ключу "${key}":`, error);
      }
    }
  }, [key, value, isInitialized]);

  return [value, setValue] as const;
};
