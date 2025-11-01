import { useState, useEffect } from "react";
import "./header.css";

export default function Header({ className }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={className}>
      <h1>S.E.C</h1>
      <div className="tema">
        <img
          src={darkMode ? "https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/moon.png" : "https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/sun.png"}
          alt="Alternar tema"
          height={40}
          onClick={() => setDarkMode(!darkMode)}
          className="header-img"
        />
      </div>
    </div>
  );
}
