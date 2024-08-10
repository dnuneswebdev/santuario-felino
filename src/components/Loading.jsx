import {ImSpinner9} from "react-icons/im";

function Loading() {
  return (
    <div className="h-full flex items-center justify-center">
      <ImSpinner9 className="spinner w-12 h-12 text-secondary" />
    </div>
  );
}

export default Loading;
