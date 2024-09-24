// Concepts Covered
// useState
// useEffect + dependency array
// props
// Using components


import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const response = await data.json();
    console.log(response.slip.advice);
    setAdvice(response.slip.advice);
    setCount(count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have red the advice <strong>{props.count}</strong> times
    </p>
  );
}
