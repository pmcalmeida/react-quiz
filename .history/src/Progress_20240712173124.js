function Progress({ index, numQuestions }) {
    return (
        <header className="progress">
            <p>Question <strong>{index + 1}</strong>  / {numQuestions}</p>
            <p>
                <strong></strong>
            </p>
        </header>
    )
}

export default Progress
