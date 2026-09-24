import { startTransition, useState, ViewTransition } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState<"list" | "detail">("list");

  const navigate = (nextPage: "list" | "detail") => {
    startTransition(() => {
      setPage(nextPage);
    });
  };

  return (
    <main>
      {page === "list" ? (
        <section>
          <h1>商品一覧</h1>
          <button className="product" onClick={() => navigate("detail")}>
            <ViewTransition name="product-image">
              <img className="thumbnail" src="/apple.svg" alt="りんご" />
            </ViewTransition>
            <span>りんご</span>
          </button>
        </section>
      ) : (
        <section>
          <button onClick={() => navigate("list")}>← 一覧へ戻る</button>
          <h1>りんご</h1>
          <ViewTransition name="product-">
            <img className="hero-image" src="/apple.svg" alt="りんご" />
          </ViewTransition>
        </section>
      )}
    </main>
  );
}
