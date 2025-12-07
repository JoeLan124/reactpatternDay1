"use client";

import { questions } from "../data/questions"; // Adjust path if needed
import { useFormWizardContext } from "../hooks/useFormWizardContext";
import ProgressBar from "../components/ProgressBar"

const FormWizard = () => {
  const { state, dispatch } = useFormWizardContext();
  const currentTopic = questions[state.currentTopicIndex];

    const isCurrentTopicComplete =
      currentTopic.questions.every(
        (question) => state.points[question.id] > 0
      );

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
      <div className="flex flex-col gap-4">
        <div className="flex">
          <button
            className="bg-blue-400 rounded-2xl p-2 m-2 w-24"
            onClick={() =>
              dispatch({
                type: "SET_CURRENT_TOPIC",
                payload: {
                  index: state.currentTopicIndex - 1,
                },
              })
            }
            disabled={state.currentTopicIndex === 0}>
            Previous
          </button>
          <button
            className={`${
              !isCurrentTopicComplete
                ? "bg-gray-300"
                : state.currentTopicIndex ===
                    questions.length - 1 &&
                  isCurrentTopicComplete
                ? "bg-green-400"
                : "bg-blue-400"
            } rounded-2xl p-2 m-2 w-24`}
            onClick={() =>
              dispatch({
                type: "SET_CURRENT_TOPIC",
                payload: {
                  index: state.currentTopicIndex + 1,
                },
              })
            }
            disabled={
              state.currentTopicIndex ===
                questions.length - 1 ||
              !isCurrentTopicComplete
            }>
            {state.currentTopicIndex <= questions.length - 2
              ? "Next"
              : "End"}
          </button>
        </div>
        <div className="flex">
          <button
            className="bg-blue-200 text-blue-500 rounded-2xl p-2 m-2 w-24"
            onClick={() =>
              dispatch({
                type: "RESET_PAGE",
                payload: {
                  index: state.currentTopicIndex,
                },
              })
            }>
            Reset
          </button>
          <button
            className="bg-blue-200 text-blue-500  rounded-2xl p-2 m-2 w-24"
            onClick={() =>
              dispatch({
                type: "RESET_ALL"
              })
            }>
            Reset All
          </button>
        </div>
      </div>
      <ProgressBar/>
    </div>
  );
};
export default FormWizard;
