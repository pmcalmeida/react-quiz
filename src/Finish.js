import { useQuiz } from "./QuizContext";

function Finish() {
  const { points, maxPossiblePoints } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className='result'>
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}

export default Finish;
