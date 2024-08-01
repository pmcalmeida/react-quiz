import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error("Unknown action");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ ...state }}>{children}</QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("QuizContext was used outside the QuizProvider");
  }

  return context;
}

export { QuizProvider, useQuiz };
