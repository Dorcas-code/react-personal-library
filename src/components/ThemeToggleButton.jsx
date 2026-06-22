import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTheme } from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button variant="primary" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} 
      </Button>
      </>
  );
};

export default ThemeToggleButton;