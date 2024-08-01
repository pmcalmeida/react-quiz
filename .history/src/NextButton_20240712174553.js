function NextButton({ answer, dispatch }) {
    if (!answer) return null;
    if (index < numQuestions) {
        return (
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion'})}>Next</button>
        )
    }

}

export default NextButton
