import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Question from "./Question";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading'
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return {
        ...state,
        status: 'Error'
      }
    case 'start':
      return { ...state}
    default:
      throw new Error("No action");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: 'dataReceived', payload: data })
    ).catch(() =>  dispatch({ type: 'dataFailed' }))
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        { status === 'loading' && <Loader />}
        { status === 'error' && <Error />}
        { status === 'ready' && <Start numQuestions={numQuestions} />}
        { status === 'active' && <Question />}

      </Main>
    </div>
  );
}