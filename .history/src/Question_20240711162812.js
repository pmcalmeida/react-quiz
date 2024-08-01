function Question({ question }) {
    const { question, options } = question;

    return (
        <div>
            <h4>{question}</h4>
            <div className="options">
                {options.map((option) => )}
            </div>
        </div>
    )
}

export default Question
