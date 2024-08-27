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
      className="w-full hover:cursor-pointer"
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <div className="flex w-full justify-evenly">
        <MoonIcon />
        {theme === "light" ? <ToggleRightIcon /> : <ToggleLeftIcon />}
        <SunIcon />
      </div>
    </div>
  );
};

export default ThemeToggle;
