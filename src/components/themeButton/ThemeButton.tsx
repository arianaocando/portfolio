import React from "react";
import "@styles/ThemeButton.scss";

interface ThemeButtonProps {
  isDark: boolean;
  onChange: (isDark: boolean) => void;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

function ThemeButton({
  isDark,
  onChange,
  className = "",
  id = "theme-button",
  children,
}: ThemeButtonProps) {
  return (
    <button
      id={id}
      role="switch"
      onClick={() => onChange(!isDark)}
      className={`theme-button ${className} ${isDark ? "active" : ""}`}
    >
      {children || (isDark ? "🌙" : "☀️")}
    </button>
  );
}

export default ThemeButton;
