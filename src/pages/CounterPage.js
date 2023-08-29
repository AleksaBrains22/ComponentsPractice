import { useState, useEffect } from "react";
import Button from "../components/Button";
function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <hi>Count is {count}</hi>
      <Button onClick={handleClick}>Increment </Button>
    </div>
  );
}

export default CounterPage;
