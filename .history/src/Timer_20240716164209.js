import { useEffect } from "react"

function Timer({ dispatch }) {

    useEffect(() => {
        setInterval(() => dispatch({ type: 'tick' }), 1000);
    }, [dispatch]);

    return (
        <div className="timer">
            secondsRemaining
        </div>
    )
}

export default Timer
