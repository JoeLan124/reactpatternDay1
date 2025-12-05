import { type } from "os";

export interface FormWizardState {
  values: Record<string, string | number>; // Object for form values (e.g., { email: 'user@example.com' })
  errors: Record<string, string>; // Object for validation errors (e.g., { email: 'Invalid email' })
  points: Record<string, number>; // Object for question points (e.g., { q1: 5 })
}

export type FormWizardAction =
  | {
      type: "CHANGE_FIELD";
      payload: {
        name: string;
        value: string | number;
      };
    }
  | {
      type: "UPDATE_POINTS";
      payload: {
        questionId: string;
        points: number;
      };
    };

const defaultFormWizardReducer = (
  state: FormWizardState,
  action: FormWizardAction
): FormWizardState => {
  switch (action.type) {
    case "CHANGE_FIELD": {
      const { name, value } = action.payload;
      const errors = { ...state.errors };

      if (name === "email" && typeof value === "string" && !value.includes("@")) {
        errors.mail = "Invalid email address";
      } else {
        delete errors[name];
      }
      return {
        ...state,
        values: { ...state.values, [name]: value },
        errors,
      };
    }
    case "UPDATE_POINTS": {
      const { questionId, points } = action.payload;
      return {
        ...state,
        points: { ...state.points, [questionId]: points },
      };
    }
    default:
      return state;
  }
};

export { defaultFormWizardReducer };
