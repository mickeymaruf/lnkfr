import clsx from "clsx";
import { BsShieldShaded, BsThreeDotsVertical } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import React from "react";

function Safari({ src, children, mode, className, ...props }) {
  return (
    <div className={clsx("overflow-hidden", className)} {...props}>
      {mode && (
        <div
          className={clsx(
            "px-2 py-1.5 flex justify-between items-center",
            mode === "dark" ? "bg-[#35363A]" : "bg-gray-100"
          )}
        >
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <BsShieldShaded
              size={10}
              className={mode === "dark" ? "text-gray-400" : "text-gray-500"}
            />
            <div
              className={clsx(
                "mx-auto rounded px-20 py-0.5 text-[7px] font-sans flex items-center gap-1",
                mode === "dark"
                  ? "bg-[#1f2224] text-white"
                  : "bg-white text-gray-500"
              )}
            >
              <IoLockClosed className="text-gray-400" /> lnkfr.io/yourname
            </div>
          </div>
          <div className={mode === "dark" ? "text-gray-400" : "text-gray-500"}>
            <BsThreeDotsVertical size={10} />
          </div>
        </div>
      )}
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
