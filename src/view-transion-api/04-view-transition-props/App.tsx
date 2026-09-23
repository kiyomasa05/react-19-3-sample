import { startTransition, useState, ViewTransition } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState<"a" | "b">("a");

  const handleClick = () => {
    startTransition(() => {
      setPage((current) => (current === "a" ? "b" : "a"));
    });
  };

  return (
    <main>
      <button onClick={handleClick}>切り替える</button>
      <ViewTransition update="page-update">
        <div className={`content`}>{page === "a" ? <PageA /> : <PageB />}</div>
      </ViewTransition>
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
