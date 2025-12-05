
interface FormWizardState {
  values: Record<string, any>; // Object for form values (e.g., { email: 'user@example.com' })
  errors: Record<string, string>; // Object for validation errors (e.g., { email: 'Invalid email' })
}

interface FormWizardAction {
  type: string;
  payload: {
    name: string;
    value: any;
  };
}

const defaultFormWizardReducer = (
  state: FormWizardState,
  action: FormWizardAction
): FormWizardState => {
  switch (action.type) {
    case "CHANGE_FIELD": {
      const { name, value } = action.payload;
      const errors = { ...state.errors };

      if (name === "email" && !value.includes("@")) {
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
  }
};

export { defaultFormWizardReducer };
