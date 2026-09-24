import { startTransition, useState, ViewTransition } from "react";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState("Hello");

  const handleClick = () => {
    startTransition(() => {
      setMessage((current) => (current === "Hello" ? "Welcome" : "Hello"));
    });
  };

  return (
    <main>
      <button onClick={handleClick}>内容を切り替える</button>

      <ViewTransition default="default-transition">
        <div className="content">
          <h1>{message}</h1>
          <p>defaultで共通のアニメーションを適用します。</p>
        </div>
      </ViewTransition>
    </main>
  );
}
