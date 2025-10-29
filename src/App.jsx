import { useState, useEffect } from "react";

export default function App() {
  const [phase, setPhase] = useState("loading");
  const [text, setText] = useState("");

  useEffect(() => {
    if (phase === "loading") {
      const message = "Initializing Dealer’s Dojo Secure Network...";
      let i = 0;
      const interval = setInterval(() => {
        setText(message.slice(0, i++));
        if (i > message.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("access"), 1000);
        }
      }, 60);
    }
  }, [phase]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-dojoBlack text-gray-200 font-code">
      {phase === "loading" && (
        <h1 className="text-dojoRed text-2xl md:text-3xl animate-pulse">{text}</h1>
      )}

      {phase === "access" && (
        <div className="max-w-md p-6 rounded-lg border border-dojoRed shadow-lg shadow-dojoRed/30">
          <h1 className="text-dojoRed text-3xl mb-4 font-bold">ACCESS GRANTED</h1>
          <p className="mb-4">
            Welcome, Agent.  
            The network is now active.  
            Your mission: infiltrate the automotive syndicate and establish dominance in the trade network.
          </p>
          <button
            onClick={() => alert('Connecting to mission database...')}
            className="mt-4 px-6 py-3 bg-dojoRed hover:bg-red-700 rounded-lg text-white transition"
          >
            Enter The Dojo
          </button>
        </div>
      )}
    </div>
  );
}
