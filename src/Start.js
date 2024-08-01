import { useQuiz } from "./QuizContext";

function Start() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className='start'>
      <h2>Welcome to the react quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "start" })}
      >
        Lets start!
      </button>
    </div>
  );
}

export default Start;
