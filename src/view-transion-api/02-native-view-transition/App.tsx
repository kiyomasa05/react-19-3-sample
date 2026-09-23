import { useState } from "react";
import "./App.css";
import { flushSync } from "react-dom";

export default function App() {
  const [page, setPage] = useState<"a" | "b">("a");

  const handleClick = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        setPage((current) => (current === "a" ? "b" : "a"));
      });
    });
  };

  return (
    <main>
      <button onClick={handleClick}>切り替える</button>

      <div className={`content`}>{page === "a" ? <PageA /> : <PageB />}</div>
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
