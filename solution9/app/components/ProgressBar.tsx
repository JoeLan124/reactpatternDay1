"use client";

import { questions } from "../data/questions"; // Adjust path if needed
import { useFormWizardContext } from "../hooks/useFormWizardContext";

const ProgressBar = () => {
  const { state, dispatch } = useFormWizardContext();
  
  // Calculate total number of questions across all topics
  const questionsAll = questions.reduce((total, topic) => {
    return total + topic.questions.length;
  }, 0);
  
  // Calculate number of answered questions (points > 0)
  const questionsAnswered = Object.keys(state.points).filter(
    (questionId) => state.points[questionId] > 0
  ).length;

  return <div className="flex justify-center mx-auto w-full">
    {questionsAnswered} of { questionsAll} 

  </div>;
};
export default ProgressBar;
