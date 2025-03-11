import React from "react";
import { Twitter } from "lucide-react";

const TestimonialCard = ({ avatarSrc, name, username, content }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-300 shadow-sm max-w-md h-fit">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img
              src={avatarSrc}
              alt={`${name}'s profile`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-semibold text-[15px]">{name}</p>
            <p className="text-[14px]">@{username}</p>
          </div>
        </div>
        <Twitter className="h-5 w-5 text-[#1DA1F2]" />
      </div>

      <div className="mt-3 text-[15px] leading-normal text-left">{content}</div>
    </div>
  );
};

export default TestimonialCard;
