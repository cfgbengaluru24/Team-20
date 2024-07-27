import React from "react";

function Button({ text }) {
  return (
    <button
      type="button"
      className="rounded-md bg-[#FF4D00] border-black px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#FF4D00]
            ease-in-out duration-500"
    >
      {text}
    </button>
  );
}

export default Button;
