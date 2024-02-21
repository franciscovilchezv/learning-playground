import { useEffect, useState } from "react";

function TestComponent(props) {
  let [count, setCount] = useState(props.count)
  let [count2, setCount2] = useState(props.count2)
  console.log("rerender");
  function increaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("a");
  }, [count])

  useEffect(() => {
    console.log("b");
  }, [count2])

  return (
    <div className="flex flex-col">
      <div>{count}</div>
      <div>{count2}</div>
      <button onClick={increaseCount}>Click</button>
    </div>
  );
}

export default TestComponent;
