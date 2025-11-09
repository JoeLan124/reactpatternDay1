"use client"
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // State initialized with initialValue to ensure server/client hydration match
  const [storedValue, setStoredValue] = useState(initialValue);

  // Read from localStorage after mount (client-side only)
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

  // 2. Sicheres Schreiben (Try-Catch)
  const writeValue = (newValue) => {
    try {
      // State aktualisieren
      setStoredValue(newValue);

      // localStorage aktualisieren
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          key,
          JSON.stringify(newValue)
        );
      }
    } catch (error) {
      // Fängt Fehler beim Speichern oder State-Update ab
      console.error(
        `Error updating localStorage or state for key "${key}":`,
        error
      );
    }
  };

  return [storedValue, writeValue];
}

export default useLocalStorage;
