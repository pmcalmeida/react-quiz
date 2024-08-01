import { useQuiz } from "./QuizContext";

function Question() {
  const { question, dispatch, answer } = useQuiz();
  const { question, options, correctOption } = data;
  const hasAnswer = answer !== null ? true : "";

  return (
    <div>
      <h4>{question}</h4>
      <div className='options'>
        {options.map((option, index) => (
          <button
            key={option}
            disabled={hasAnswer === true}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswer && (index === correctOption ? "correct" : "wrong")
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;