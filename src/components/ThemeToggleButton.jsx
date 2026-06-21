import React from 'react';
import { useTheme } from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
 <div
              onClick={() => toggleTheme()}
              style={{
                border: "1px solid gray",
                position: "realtive",
                width: "40px",
                height: "20px",
                background: theme === "light" ? "white" : "black",
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: "1px",
                  left: theme === "light" ? "1px" : "21px",
                  width: "16px",
                  height: "16px",
                  background: theme === "light" ? "black" : "white",
                }}
              ></div>
            </div>
  );
};

export default ThemeToggleButton;