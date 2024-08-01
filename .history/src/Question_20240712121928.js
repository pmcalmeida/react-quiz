function Question({ data, dispatch, answer }) {
    const { question, options } = data;

    return (
        <div>
            <h4>{question}</h4>
            <div className="options">
                {options.map((option) => <button 
                    key={option} 
                    className="btn btn-option"
                    onClick={() => dispatch({ type: 'newAnswer': payload: option})}
                    >{option}</button>)}
            </div>
        </div>
    )
}

export default Question
