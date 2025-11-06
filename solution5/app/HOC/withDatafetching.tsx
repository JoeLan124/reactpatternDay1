"use client"
import React, { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";



export function withDataFetching(WrappedComponent) {
  return function WithDataFetchingComponent(props) {
    // Typen für die Daten (sollten aus der API-Datei importiert werden,
    // hier zur Vereinfachzung direkt definiert)
    type user = {
      user: string;
      role?: string;
    };

    // 📌 Angenommen, deine API-Route liegt unter /api/randomUser
    const API_ENDPOINT = "/api/user";
    // Zustand für die Benutzerdaten
    const [randomUser, setRandomUser] =
      useState<user | null>(null);
    // Zustand für den Lade-Status
    const [isLoading, setIsLoading] = useState(true);
    // Zustand für Fehler
    const [error, setError] = useState<string | null>(null);

    // Effekt, der einmal nach dem ersten Rendern ausgeführt wird
    useEffect(() => {
      async function fetchRandomUser() {
        try {
          setIsLoading(true);
          // 1. Fetch-Aufruf zur API-Route
          const response = await fetch(API_ENDPOINT);

          // 2. Überprüfe den HTTP-Statuscode
          if (!response.ok) {
            throw new Error(
              `HTTP error! Status: ${response.status}`
            );
          }

          // 3. Konvertiere die Antwort in JSON und setze den Zustand
          const json = await response.json();
          // API returns { message: string, user: User }
          const userData: user | null = json?.user ?? null;
          setRandomUser(userData);
        } catch (err) {
          // Fehlerbehandlung
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
        } finally {
          // Lade-Status beenden
          setIsLoading(false);
        }
      }

      fetchRandomUser();
    }, []); // Das leere Array [] sorgt dafür, dass der Effekt nur einmal läuft

    // --- RENDERING ---

    if (isLoading) {
      return <div>Lade zufälligen Benutzer...</div>;
    }

    if (error) {
      return (
        <div>Fehler beim Laden der Daten: **{error}**</div>
      );
    }
    return <WrappedComponent user={randomUser} />;
  }
    }
