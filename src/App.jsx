import { useState } from "react";
import "./App.css";
import ContentBox from "./components/ContentBox/ContentBox";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme === "light" ? "" : "dark"}`}>
      <button className="mode-button" onClick={toggleTheme}>
        Mode
      </button>
      <ContentBox theme={theme} />
    </div>
  );
}

export default App;
