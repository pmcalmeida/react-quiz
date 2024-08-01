function NextButton({ answer, dispatch }) {
    if (!answer) return null;

    return (
        <button className="btn btn-ui" onClick={() => dispatch({ type: 'nextQuestion'})} />
    )
}

export default NextButton
