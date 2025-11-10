"use client"
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {

  const [storedValue, setStoredValue] = useState(initialValue);


  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const item = window.localStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      console.warn(
        `Error reading localStorage key "${key}":`,
        error
      );
    }
  }, [key, initialValue]);

  const writeValue = (newValue) => {
    try {
      setStoredValue(newValue);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          key,
          JSON.stringify(newValue)
        );
      }
    } catch (error) {
      console.error(
        `Error updating localStorage or state for key "${key}":`,
        error
      );
    }
  };

  return [storedValue, writeValue];
}

export default useLocalStorage;
