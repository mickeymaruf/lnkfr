"use client";
import React, { useEffect, useRef, useState } from "react";
import Tiptap from "@/components/tiptap/tiptap";
import { Button } from "@/components/ui/button";
import ImageUploader from "@/components/image-uploader";
import { colors, gradients } from "@/lib/thumbnailUtils";
import clsx from "clsx";
import { IoBanOutline } from "react-icons/io5";
import { Slider } from "@/components/ui/slider";
import DragBox from "@/components/editor/mocks/DragBox";
import html2canvas from "html2canvas-pro";

function page() {
  const [selectedColor, setSelectedColor] = useState(gradients[0].value);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [width, setWidth] = useState();
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const divRef = useRef(null);

  const captureScreenshot = () => {
    if (divRef.current) {
      html2canvas(divRef.current, {
        scale: 3, // Increase scale for better resolution
        backgroundColor: null,
      }).then((canvas) => {
        const image = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = image;
        link.download = "screenshot.png";
        link.click();
      });
    }
  };

  return (
    <main className="bg-white mx-auto w-full max-w-3xl p-10">
      <div
        ref={divRef}
        className={clsx(
          "w-full aspect-[3/2] rounded-xl relative overflow-hidden"
        )}
        style={{ background: selectedColor }}
      >
        <ImageUploader selectedStyle={selectedStyle} width={width} pos={pos} />
      </div>

      <div className="">
        <div className="flex gap-2 my-2">
          {colors.map((color) => (
            <button
              key={color.id}
              className={`h-8 w-8 rounded-full border ${
                selectedColor === color.value
                  ? "outline-black outline-2 outline-offset-1"
                  : ""
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
              onClick={() => setSelectedColor(color.value)}
            />
          ))}
        </div>

        <div className="flex gap-2 my-2">
          {gradients.map((color) => (
            <button
              key={color.id}
              className={`h-10 w-20 rounded-lg border ${
                selectedColor === color.value
                  ? "outline-black outline-2 outline-offset-1"
                  : ""
              }`}
              style={{ background: color.value }}
              title={color.name}
              onClick={() => setSelectedColor(color.value)}
            />
          ))}
        </div>

        <div className="flex gap-2 my-2">
          <div
            onClick={() => setSelectedStyle(null)}
            className="w-20 rounded-lg border flex items-center justify-center text-gray-600 bg-gray-200"
          >
            <IoBanOutline size={25} />
          </div>
          <img
            className="w-20 rounded-lg"
            src="https://shots.so/mockups/Browser/styles/safari-light.png"
            //   className={`h-10 w-20 rounded-lg border ${
            // selectedColor === color.value
            //   ? "outline-black outline-2 outline-offset-1"
            //   : ""
            //   }`}
            //   style={{ background: color.value }}
            //   title={color.name}
            onClick={() => setSelectedStyle("light")}
          />
          <img
            className="w-20 rounded-lg"
            src="https://shots.so/mockups/Browser/styles/safari-dark.png"
            alt=""
            onClick={() => setSelectedStyle("dark")}
          />
        </div>

        {/* <div className="flex gap-2 my-2">
          <div
            onClick={() => setSelectedStyle(null)}
            className="w-20 h-[60px] rounded-lg bg-gray-200 border overflow-hidden flex justify-end items-end"
          >
            <div className="w-3/5 m-auto aspect-[3/2] bg-white rounded-sm"></div>
          </div>
          <div
            onClick={() => setSelectedStyle(null)}
            className="w-20 h-[60px] rounded-lg bg-gray-200 border overflow-hidden flex justify-end items-end"
          >
            <div className="w-14 h-12 bg-white rounded-tl-sm"></div>
          </div>
          <div
            onClick={() => setSelectedStyle(null)}
            className="w-20 h-[60px] rounded-lg bg-gray-200 border overflow-hidden flex justify-end items-end"
          >
            <div className="w-14 h-12 bg-white rounded-tl-sm"></div>
          </div>
        </div> */}

        <div className="my-2">
          {width}
          <Slider
            defaultValue={[10]}
            min={50}
            max={200}
            step={1}
            onValueChange={(value) => setWidth(value)}
          />
        </div>
        <div className="my-2">
          <DragBox pos={pos} setPos={setPos} />
        </div>

        <Button onClick={captureScreenshot}>Save</Button>
      </div>

      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />

      <Tiptap />

      <br />
      <br />
      <br />

      <Button type="submit">Save changes</Button>
    </main>
  );
}

export default page;
