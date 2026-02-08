"use client"
import React, { useActionState, useState, useTransition } from "react"; 

const CountrySelectorLazy = React.lazy(() => import("../components/CountrySelector/page"));


const Form = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [state, formAction, isPending] = useActionState(
    updateInputData,
    {
      error: null,
      success: false,
    },
  );
  const [isPendingTransition, startTransition] = useTransition();
  
  // Combine isPending states
  const isLoading = isPending || isPendingTransition;

  async function updateInputData(prevState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const country = formData.get("country");

    // Simulierte API-Verzögerung
    await new Promise((res) => setTimeout(res, 1000));


    return {
      error: null,
      success: true,
      message: `Daten erfolgreich geändert!`,
    };
  }

  
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        startTransition(() => {
          formAction(formData);
        });
      }}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          disabled={isLoading}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Country Selector
        </h2>
        <CountrySelectorLazy
          onCountryChange={setSelectedCountry}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading
            ? "Spinner - Wird gespeichert..."
            : "Speichern"}
        </button>
      </div>
      {/* 3. Feedback an den User basierend auf dem State */}
      {state.error && (
        <p style={{ color: "red" }}>{state.error}</p>
      )}
      {state.success && (
        <p style={{ color: "green" }}>{state.message}</p>
      )}
    </form>
  );
};

export default Form