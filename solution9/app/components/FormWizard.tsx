"use client";

import { questions } from "../data/questions"; // Adjust path if needed
import { useFormWizardContext } from "../hooks/useFormWizardContext";

const FormWizard = () => {
  const { state, dispatch } = useFormWizardContext();
  const currentTopic = questions[state.currentTopicIndex];

  return (
    <div>
      {currentTopic && (
        <div key={currentTopic.id}>
          <h2>{currentTopic.topic}</h2>
          {currentTopic.questions.map((question) => (
            <div key={question.id}>
              <p>{question.question}</p>
              <input
                type="number"
                min="0"
                max="5"
                value={state.points[question.id] || 0}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_POINTS",
                    payload: {
                      questionId: question.id,
                      points: Number(e.target.value),
                    },
                  })
                }
              />
            </div>
          ))}
        </div>
      )}
      {/* Add navigation buttons */}
      <button
        onClick={() =>
          dispatch({
            type: "SET_CURRENT_TOPIC",
            payload: { index: state.currentTopicIndex - 1 },
          })
        }
        disabled={state.currentTopicIndex === 0}>
        Previous
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "SET_CURRENT_TOPIC",
            payload: { index: state.currentTopicIndex + 1 },
          })
        }
        disabled={
          state.currentTopicIndex === questions.length - 1
        }>
        Next
      </button>
    </div>
  );
};
export default FormWizard;
