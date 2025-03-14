import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function DragBox({ pos, setPos }) {
  const containerRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newX = Math.max(
        0,
        Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
      );
      const newY = Math.max(
        0,
        Math.min(100, ((e.clientY - rect.top) / rect.height) * 100)
      );
      setPos({ x: newX, y: newY });
    };

    const stopDragging = () => setDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className="relative group bg-gray-200/50 p-1 outline outline-gray-200 select-none flex flex-wrap justify-between items-center gap-1 rounded-2xl"
      style={{ width: "225px", height: "225px" }}
    >
      {[...Array(25).keys()].map((i) => (
        <div
          key={i}
          className={clsx(
            "w-10 h-10 border border-gray-300/50 rounded-full opacity-0 group-hover:opacity-100 duration-300",
            dragging ? "opacity-100" : ""
          )}
        />
      ))}

      <div
        className="absolute w-11 h-11 bg-white rounded-full shadow-sm cursor-grab active:cursor-grabbing"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={() => setDragging(true)}
      />
    </div>
  );
}
