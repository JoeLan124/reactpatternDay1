"use client";

import { useReducer } from "react";
import { FormWizardContext } from "../context";
import {
  defaultFormWizardReducer,
  FormWizardState,
  FormWizardAction,
} from "../reducers/form-wizard-reducer";

interface FormWizardProviderProps {
  reducer?: (state: FormWizardState, action: FormWizardAction) => FormWizardState; // Optional, with default provided
  children: React.ReactNode;
}

export function FormWizardProvider({
  reducer = defaultFormWizardReducer,
  children,
}: FormWizardProviderProps) {
 const [state, dispatch] = useReducer(reducer, {
   errors: {},
   points: {},
   currentTopicIndex: 0, // Start with first topic
 });

  const value = { state, dispatch };

  return (
    <FormWizardContext.Provider
      value={value}>{ children}</FormWizardContext.Provider>
  );

}