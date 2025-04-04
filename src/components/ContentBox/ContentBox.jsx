import React from "react";
import { contentData } from "../../contentData.jsx";
import { useState } from "react";
import "./ContentBox.css";

const ContentBox = ({ theme }) => {
  const [activeButtonId, setActiveButtonId] = useState(
    contentData[0]?.id || null
  );

  const activeContent = contentData.find((item) => item.id === activeButtonId);

  const handleButtonClick = (id) => {
    setActiveButtonId(id);
  };

  return (
    <div className={`contentbox-container ${theme === "light" ? "" : "dark"}`}>
      {/* Left side area */}
      <div className={`button-area ${theme === "light" ? "" : "dark"}`}>
        {contentData.map((item) => (
          <button
            key={item.id}
            className={`nav-button ${theme === "light" ? "" : "dark"} ${
              item.id === activeButtonId ? "active" : ""
            }`}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* Right side area */}
      <div className={`content-area ${theme === "light" ? "" : "dark"}`}>
        {activeContent ? (
          activeContent.content
        ) : (
          <p>Please select an option from the left</p>
        )}
      </div>
    </div>
  );
};

export default ContentBox;
