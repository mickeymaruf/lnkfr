import clsx from "clsx";
import React from "react";

function Safari({ src, children, mode }) {
  return (
    <div className="w-full mx-auto rounded-xl shadow-md shadow-black/20 border border-black overflow-hidden">
      <div
        className={clsx(
          "px-4 py-2 flex items-center border-b",
          mode === "dark"
            ? "bg-[#202124] border-[#202124]"
            : "bg-gray-100 border-black"
        )}
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div
          className={clsx(
            "mx-auto rounded-md px-4 py-1 text-sm",
            mode === "dark"
              ? "bg-[#131314] text-white"
              : "bg-white text-gray-500"
          )}
        >
          lnkfr.io/yourname
        </div>
      </div>
      <div>
        {children ? (
          children
        ) : (
          <img
            src={src}
            alt="lnkfr portfolio example"
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
}

export default Safari;
