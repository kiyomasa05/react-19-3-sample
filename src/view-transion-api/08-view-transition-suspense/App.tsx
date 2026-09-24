import { Suspense, use, useState, ViewTransition } from "react";
import "./App.css";

const messages = [
  "Suspenseの読み込みが完了しました",
  "fallbackからコンテンツへ切り替わりました",
  "revealのタイミングでアニメーションします",
];

const messageCache = new Map<number, Promise<string>>();

function waitForMessage(id: number) {
  if (!messageCache.has(id)) {
    messageCache.set(
      id,
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(messages[id % messages.length]);
        }, 2000);
      }),
    );
  }

  return messageCache.get(id)!;
}

function Content({ id }: { id: number }) {
  const message = use(waitForMessage(id));

  return (
    <div className="content">
      <p className="label">Content</p>
      <h1>{message}</h1>
      <p>2秒待ったあと、fallbackから実際のコンテンツへrevealされます。</p>
    </div>
  );
}

function Loading() {
  return (
    <div className="loading">
      <p className="label">Fallback</p>
      <h1>Loading...</h1>
      <p>fallbackはすぐ表示します。</p>
    </div>
  );
}

export default function App() {
  const [id, setId] = useState(0);

  return (
    <main>
      <button onClick={() => setId((current) => current + 1)}>
        もう一度読み込む
      </button>

      <ViewTransition update="suspense-reveal" default="none">
        <Suspense fallback={<Loading />}>
          <Content id={id} />
        </Suspense>
      </ViewTransition>
    </main>
  );
}
