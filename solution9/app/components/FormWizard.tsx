"use client";

import { questions } from "../data/questions"; // Adjust path if needed
import { useFormWizardContext } from "../hooks/useFormWizardContext";

const FormWizard = () => {
const { state, dispatch } = useFormWizardContext();

return (
  <div>
    {questions.map((topic) => (
      <div key={topic.id}>
        <h2>{topic.topic}</h2>
        {topic.questions.map((question) => (
          <div key={question.id}>
            <p>{question.question}</p>
            {/* Input for points, dispatching updates */}
            <input
              type="number"
              min="0"
              max="5"
              value={state.points[question.id] || 0} // Assuming state is { [questionId]: points }
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
    ))}
  </div>
);
};
export default FormWizard;
