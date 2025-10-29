import React, { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setAccessGranted(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen bg-black flex items-center justify-center text-green-400 font-mono text-xl">
      {loading ? (
        <div className="animate-pulse">Loading system...</div>
      ) : accessGranted ? (
        <div className="animate-fadeIn">ACCESS GRANTED ✅</div>
      ) : (
        <div>System offline</div>
      )}
    </div>
  );
}
