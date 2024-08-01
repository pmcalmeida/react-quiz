import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {

  useEffect(() => {
    fetch("http://localhost:8000/questions").then((response) => {
      console.log(response);
    }).catch()
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