import { questions } from "../data/questions";


export interface FormWizardState {
  values: Record<string, string | number>; // Object for form values (e.g., { email: 'user@example.com' })
  errors: Record<string, string>; // Object for validation errors (e.g., { email: 'Invalid email' })
  points: Record<string, number>; // Object for question points (e.g., { q1: 5 })
  currentTopicIndex: number;
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
    }
  | {
      type: "SET_CURRENT_TOPIC";
      payload: { index: number };
    };

const defaultFormWizardReducer = (
  state: FormWizardState,
  action: FormWizardAction
): FormWizardState => {
  switch (action.type) {
    
    case "UPDATE_POINTS": {
      const { questionId, points } = action.payload;
      return {
        ...state,
        points: { ...state.points, [questionId]: points },
      };
    }
    
    case "SET_CURRENT_TOPIC": {
      const { index } = action.payload;
  
      // Allow going back to previous topics without validation
      if (index <= state.currentTopicIndex) {
        return {
          ...state,
          currentTopicIndex: index,
        };
      }

      // Validate that all questions in the current topic are answered (> 0 points)
      const currentTopic = questions[state.currentTopicIndex];
      const allQuestionsAnswered = currentTopic.questions.every(
        (question) => state.points[question.id] > 0
      );
  
      if (!allQuestionsAnswered) {
        // Do not update the index if validation fails
        return state;

      }

  return {
    ...state,
    currentTopicIndex: index,
  };


    }
      
    default:
      return state;
  }
};

export { defaultFormWizardReducer };
