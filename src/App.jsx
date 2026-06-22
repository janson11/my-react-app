import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import Card from "./components/Card";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      {/* 第一张卡片关于 React */}
      <Card
        title="React是什么?"
        content="React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发。它采用组件化方式，让代码更易复用和维护。"
        imageUrl="https://react.dev/images/uwu.png"
      />

      {/* 第二个卡片是关于Vite */}
      <Card
        title="Vite的优势"
        content="Vite是新一代前端构建工具，开发服务器启动极快，支持热模块替换（HMR），是现代 React 项目的首选。"
        imageUrl="https://vite.dev/logo-without-border.svg"
      />
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
