import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finish from "./Finish";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',
  index: 0,
  points: 0,
  answer: null
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
      return { ...state, status: 'active' }
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return { ...state , answer: action.payload, points: action.payload === question.correctOption ? state.points + question.points : state.points }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null }
    case 'finish':
      return { ...state, status: 'finished' }
    case 'reset':
      return initialState;
    default:
      throw new Error("No action");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0)

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
        { status === 'ready' && <Start numQuestions={numQuestions} dispatch={dispatch} />}
        { status === 'active' &&
          <>
            <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints}/>
            <Question data={questions[index]} dispatch={dispatch} answer={answer}/>
            <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/>
          </>
        }
        {status === 'finished' && <Finish points={points} maxPossiblePoints={maxPossiblePoints}/>}
      </Main>
    </div>
  );
}