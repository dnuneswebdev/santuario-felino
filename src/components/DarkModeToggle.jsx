import {useState} from "react";
import {BsMoonFill, BsSunFill} from "react-icons/bs";

function DarkModeToggle() {
  const [theme, setTheme] = useState("cupcake");

  function handleTheme() {
    const newTheme = theme === "cupcake" ? "dracula" : "cupcake";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          onChange={handleTheme}
        />
        <BsSunFill className="swap-on h-5 w-5" />
        <BsMoonFill className="swap-off h-5 w-5" />
      </label>
    </>
  );
}

export default DarkModeToggle;
