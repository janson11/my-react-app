import { useState } from "react";
const Greeting = ({ name = "陌生人" }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>你好, {name}! </h2>
      <p>你已经点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点击我 +1</button>
    </div>
  );
};

export default Greeting;
