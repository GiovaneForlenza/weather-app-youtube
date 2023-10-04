import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

function Button({ text, icon }) {
  return (
    <button className="text-white font-semibold  hover:text-slate-200	 mx-1">
      {icon === "BsSearch" ? (
        <BsSearch />
      ) : icon === "FiMapPin" ? (
        <FiMapPin />
      ) : (
        text
      )}
    </button>
  );
}

export default Button;
