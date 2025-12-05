export interface Question {
  id: string; // Unique identifier for state management
  question: string;
  points: number; // Default to 0, but state will override
}

export interface Topic {
  id: string; // Unique identifier for topic-level logic (e.g., navigation)
  topic: string;
  questions: Question[];
}

export const questions: Topic[] = [
  {
    id: "movie-topic",
    topic: "Movie",
    questions: [
      {
        id: "q1",
        question: "Do you like horror movies?",
        points: 0,
      },
      {
        id: "q2",
        question: "Do you like animations movies?",
        points: 0,
      },
      {
        id: "q3",
        question: "Do you like romantic movies?",
        points: 0,
      },
      {
        id: "q4",
        question: "Do you like action movies?",
        points: 0,
      },
    ],
  },
  {
    id: "sports-topic",
    topic: "Sports",
    questions: [
      {
        id: "q5",
        question: "Do you like riding a bike?",
        points: 0,
      },
      {
        id: "q6",
        question: "Do you like soccer?",
        points: 0,
      },
      {
        id: "q7",
        question: "Do you like basketball?",
        points: 0,
      },
      {
        id: "q8",
        question: "Do you like formula one?",
        points: 0,
      },
    ],
  },
  {
    id: "relationships-topic",
    topic: "relationships",
    questions: [
      {
        id: "q9",
        question: "Do you like your wife?",
        points: 0,
      },
      {
        id: "q10",
        question: "Do you like your children?",
        points: 0,
      },
      {
        id: "q11",
        question: "Do you like your parents?",
        points: 0,
      },
      { id: "q12", question: "Do you like me?", points: 0 },
    ],
  },
];
