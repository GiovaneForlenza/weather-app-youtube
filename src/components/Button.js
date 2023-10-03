import React from "react";

function Button({ text }) {
  return (
    <button className="text-white font-semibold hover:text-slate-100	">
      {text}
    </button>
  );
}

export default Button;
