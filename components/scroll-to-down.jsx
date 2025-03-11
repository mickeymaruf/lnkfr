import React from "react";
import Safari from "./mocks/Safari";

function ScrollToDown({ src }) {
  return (
    <Safari>
      <img
        className="h-[250px] md:h-[510px] w-full object-cover object-top rounded-b-lg hover:object-bottom duration-[5s] ease-in-out"
        src={src}
        alt=""
      />
    </Safari>
  );
}

export default ScrollToDown;
