import { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState<"a" | "b">("a");

  return (
    <main>
      <button onClick={() => setPage(page === "a" ? "b" : "a")}>
        切り替える
      </button>

      <div className="page">{page === "a" ? <PageA /> : <PageB />}</div>
    </main>
  );
}

function PageA() {
  return (
    <div className="content">
      <h1>Page A</h1>
      <p>Hello A</p>
    </div>
  );
}

function PageB() {
  return (
    <div className="content">
      <h1>Page B</h1>
      <p>Hello B</p>
    </div>
  );
}
