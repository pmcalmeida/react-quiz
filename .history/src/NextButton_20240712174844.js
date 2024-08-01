function NextButton({ answer, dispatch, index, numQuestions }) {
    if (answer === nulll) return null;
    if (index < numQuestions - 1) {
        return (
            <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion'})}>Next</button>
        )
    }

}

export default NextButton
