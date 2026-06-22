import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting name="Janson"></Greeting>
    </div>
  );

  // function App() {
  //   const [count, setCount] = useState(0);
  //   return (
  //     <div className="App">
  //       <HelloWorld name="Janson"></HelloWorld>
  //     </div>
  //   );

  // return (
  //   <div className="App">
  //     <div>
  //       <a href='https://vitejs.dev' target='_blank'>
  //         <img src={reactLogo} className='logo react' alt='React logo'></img>
  //       </a>
  //     </div>
  //     <h1>你好, Janson!!!</h1>
  //     <div className='card'>
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         当前计数:{count}
  //       </button>
  //     </div>
  //     <p>
  //       编辑 <code>src/App/jsx</code>并保存体验热更新!
  //     </p>
  //   </div>
  // )
}

export default App;
