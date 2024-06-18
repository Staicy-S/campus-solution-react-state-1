import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };

  const welcomeMessage = language === "en" ? "Welcome 👋" : "Willkommen 👋";

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{welcomeMessage}</h2>
        <h4>{isLoggedIn ? "Logged in as Staicy 👩‍💻" : "Logged out 👻"}</h4>
        <div className="buttons-container">
          <div className="💪">
            <button onClick={() => handleLanguageChange("en")}>
              Switch to English 🇺🇸
            </button>
            <button onClick={() => handleLanguageChange("de")}>
              Switch to German 🇩🇪
            </button>
          </div>
          <div className="💪">
            <button onClick={() => handleLoginStatusChange(true)}>
              Log in as yourself
            </button>
            <button onClick={() => handleLoginStatusChange(false)}>
              Log out
            </button>
          </div>
        </div>
      </header>
      <div className="like-button">
        <h3>Preference Button 🤔</h3>
        <button onClick={handleLikeToggle}>
          {liked ? "Liked 👍" : "Not liked 👎"}
        </button>
      </div>
    </div>
  );
}

export default App;
