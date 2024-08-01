import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading'
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'dataReceived':
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
    .then((res) => res.json())
    .then((data) => {
      dispatch((data) => dispatch({ type: 'dataReceived', payload: data }));
    }).catch((err) => console.error(err))
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}