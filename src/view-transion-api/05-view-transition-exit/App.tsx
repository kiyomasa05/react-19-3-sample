import { startTransition, useState, ViewTransition } from "react";
import "./App.css";
export default function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    startTransition(() => {
      setShow((current) => !current);
    });
  };

  return (
    <main>
      <button onClick={handleClick}>表示を切り替える</button>

      {show && (
        <ViewTransition enter="card-enter" exit="card-exit">
          <div className="card">Hello ViewTransition</div>
        </ViewTransition>
      )}
    </main>
  );
}
