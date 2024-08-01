function Question({ data, dispatch, answer }) {
    const { question, options, correctOption } = data;

    return (
        <div>
            <h4>{question}</h4>
            <div className="options">
                {options.map((option, index) =>
                <button 
                    key={option} 
                    className={`btn btn-option ${index === answer ? 'answer' : ''} ${index === correctOption ? 'right' : 'wrong'}`}
                    onClick={() => dispatch({ type: 'newAnswer', payload: index})}
                >
                    {option}
                </button>
                )}
            </div>
        </div>
    )
}

export default Question
