import { useReducer } from "react";
import { FormWizardContext } from "../context";
import { defaultFormWizardReducer } from "../reducers/form-wizard-reducer";

interface FormWizardProviderProps {
  reducer?: (state: any, action: any) => any; // Optional, with default provided
  children: React.ReactNode;
}

export function FormWizardProvider({
  reducer = defaultFormWizardReducer,
  children
}: FormWizardProviderProps) { 
    const [state, dispatch] = useReducer(reducer, {
      values: { name: "", emai: "" },
      errors: {},
    });

    const value = { state, dispatch }
    
    return (
      <FormWizardContext.Provider
            value={value}>{ children}</FormWizardContext.Provider>
    );

}