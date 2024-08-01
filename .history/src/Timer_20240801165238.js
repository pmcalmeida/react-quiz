import { useEffect } from "react";
import { useQuiz } from "./QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  useEffect(() => {
    const timerId = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [dispatch]);

  return <div className='timer'>{secondsRemaining}</div>;
}

export default Timer;
