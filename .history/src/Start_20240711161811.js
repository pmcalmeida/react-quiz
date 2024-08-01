function Start({ numQuestions }) {
    return (
        <div className="start">
            <h2>Welcome to the react quiz!</h2>
            <h3>{numQuestions} questions to test your react mastery</h3>
            <button>Lets start!</button>
        </div>
    )
}

export default Start
