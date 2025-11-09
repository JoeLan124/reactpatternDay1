"use Client"
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // 1. Sicheres Lesen (Try-Catch)
  const readValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(
        `Error reading localStorage key “${key}”:`,
        error
      );
      return initialValue;
    }
  };

  // State, der den gespeicherten oder initialen Wert hält
  const [storedValue, setStoredValue] = useState(readValue);

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
        `Error updating localStorage or state for key “${key}”:`,
        error
      );
    }
  };

  // Stellt sicher, dass der State auf dem Client neu synchronisiert wird,
  // falls ein externer Speicher-Event den Wert geändert hat.
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [storedValue, writeValue];
}

export default useLocalStorage;
