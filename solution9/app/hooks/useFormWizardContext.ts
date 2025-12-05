import { useContext } from "react";
import { FormWizardContext } from "../context";

export function useFormWizardContext() { 
    const context = useContext(FormWizardContext)
    if (!context) throw new Error("useFormWizardContext must be within a FormWizardProvider")
    
    return context;

}