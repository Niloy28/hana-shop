"use client";

import {
  MoonIcon,
  SunIcon,
  ToggleLeftIcon,
  ToggleRightIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      data-testid="toggle"
      className="w-full hover:cursor-pointer"
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <div className="flex w-full justify-evenly">
        <MoonIcon data-testid="moonIcon" />
        {theme === "light" ? <ToggleRightIcon /> : <ToggleLeftIcon />}
        <SunIcon data-testid="sunIcon" />
      </div>
    </div>
  );
};

export default ThemeToggle;
