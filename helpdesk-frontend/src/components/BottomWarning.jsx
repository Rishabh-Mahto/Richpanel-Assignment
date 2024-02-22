import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="py-3 text-xs flex justify-center">
      <div>{label}</div>
      <Link className="pointer  pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
}
