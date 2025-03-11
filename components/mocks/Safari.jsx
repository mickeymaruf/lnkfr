import React from "react";

function Safari({ src, children }) {
  return (
    <div className="w-full mx-auto rounded-xl shadow-md shadow-black/20 border border-black overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-black">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mx-auto bg-white rounded-md px-4 py-1 text-sm text-gray-500">
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
