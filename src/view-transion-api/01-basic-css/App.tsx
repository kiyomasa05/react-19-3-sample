import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState<"a" | "b">("a");
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    // まずfade-outを開始
    setIsExiting(true);
  };

  const handleAnimationEnd = () => {
    if (!isExiting) return;

    // fade-out完了後にページを切り替える
    setPage((current) => (current === "a" ? "b" : "a"));

    // 新しいページをfade-inさせる
    setIsExiting(false);
  };

  return (
    <main>
      <button onClick={handleClick}>切り替える</button>

      <div
        className={`content ${isExiting ? "fade-out" : "fade-in"}`}
        // onAnimationEndは CSS アニメーションが完了したときに発生します
        onAnimationEnd={handleAnimationEnd}
      >
        {page === "a" ? <PageA /> : <PageB />}
      </div>
    </main>
  );
}

function PageA() {
  return (
    <>
      <h1>Page A</h1>
      <p>Hello A</p>
    </>
  );
}

function PageB() {
  return (
    <>
      <h1>Page B</h1>
      <p>Hello B</p>
    </>
  );
}
