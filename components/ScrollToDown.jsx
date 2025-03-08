import React from "react";

function ScrollToDown({ src, onlyMock = false, noPadding = false }) {
  return (
    <div
      className={`md:py-10 ${
        noPadding ? "" : "md:px-20"
      }  cursor-pointer relative mt-6 md:mt-0`}
    >
      {onlyMock || (
        <img
          className="absolute -right-10 w-32 md:w-52 top-1/4"
          src="/hover-to-view.png"
          alt=""
        />
      )}

      <div
        className="md:w-11/12 rounded-lg"
        style={{ boxShadow: "2px 10px 15px 0px #727D73" }}
      >
        <img className="rounded-t-lg" src="/browser-mockup-bar.png" alt="" />
        <img
          className={`h-[250px] md:h-[510px] w-full object-cover object-top rounded-b-lg ${
            onlyMock ? "" : "hover:object-bottom duration-[5s] ease-in-out"
          }`}
          src={src}
          alt=""
        />
      </div>
    </div>
  );
}

export default ScrollToDown;
