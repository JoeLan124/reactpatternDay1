import { questions } from "../data/questions";


export interface FormWizardState {
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
    }
  | {
      type: "RESET_ALL";
    }
  | {
      type: "RESET_PAGE";
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

    case "RESET_ALL": {
      return {
        errors: {},
        points: {},
        currentTopicIndex: 0, // Start with first topic
      };
    }

    case "RESET_PAGE": {
      const { index } = action.payload;
      
      // Get all question IDs for the topic at the given index
      const topicQuestions = questions[index]?.questions || [];
      const questionIdsToReset = topicQuestions.map(q => q.id);
      
      // Create new points object excluding the questions from this topic
      const newPoints = { ...state.points };
      questionIdsToReset.forEach(questionId => {
        delete newPoints[questionId];
      });
      
      return {
        ...state,
        points: newPoints,
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
      const currentTopic =
        questions[state.currentTopicIndex];
      const allQuestionsAnswered =
        currentTopic.questions.every(
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
