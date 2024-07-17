import {BsMoonFill, BsSunFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {toggleTheme} from "../features/user/userSlice";

function DarkModeToggle() {
  const dispatch = useDispatch();

  function handleTheme() {
    dispatch(toggleTheme());
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
