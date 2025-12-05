"use client";

import { createContext, Dispatch } from "react";
import {
  FormWizardAction,
  FormWizardState,
} from "../reducers/form-wizard-reducer";

export interface FormWizardContextType {
  state: FormWizardState;
  dispatch: Dispatch<FormWizardAction>;
}
const FormWizardContext = createContext<FormWizardContextType | null>(null);
export { FormWizardContext };