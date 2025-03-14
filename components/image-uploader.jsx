import { ArrowUp, Image, Plus } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Safari from "./editor/mocks/Safari";
import clsx from "clsx";

export default function ImageUploader({ selectedStyle, width, pos }) {
  const [preview, setPreview] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();

    try {
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(acceptedFiles[0]);
    } catch (error) {
      setPreview(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {preview ? (
        <Safari
          style={{ width: width + "%", left: pos.x + "%", top: pos.y + "%" }}
          mode={selectedStyle}
          className={clsx(
            "w-[75%] h-fit cursor-pointer",
            "absolute left-1/2 top-1/2 -translate-1/2 shadow-2xl"
          )}
          {...getRootProps()}
        >
          <img src={preview} alt="Uploaded image" />
        </Safari>
      ) : (
        <div
          style={{ width: width + "%", left: pos.x + "%", top: pos.y + "%" }}
          className={clsx(
            preview ? "hidden" : "block",
            "bg-white w-[75%] aspect-[3/2] flex items-center justify-center text-center group cursor-pointer",
            "absolute left-1/2 top-1/2 -translate-1/2 shadow-2xl"
          )}
          {...getRootProps()}
        >
          <div className="relative">
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <div className="bg-black w-fit mx-auto rounded-full p-2">
                <Plus className="mx-auto" color="#ffffff" />
              </div>
              <p className="text-xl font-medium mt-2 whitespace-nowrap">
                Choose file
              </p>
              <p className="mt-2 text-sm text-gray-500">PNG or JPG</p>
            </div>
            <div className="opacity-100 group-hover:opacity-0 duration-200 absolute top-0 left-1/2 -translate-x-1/2">
              <div className="bg-black w-fit mx-auto rounded-full p-2">
                <Image className="mx-auto" color="#ffffff" />
              </div>
              <p className="text-xl font-medium mt-2 whitespace-nowrap">
                Drop of Paste
              </p>
              <p className="mt-2 text-sm text-gray-500">PNG or JPG</p>
            </div>
          </div>

          {isDragActive && (
            <div className="bg-white/80 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl">
              <div className="bg-black rounded-full p-2">
                <ArrowUp color="#ffffff" size={25} />
              </div>
            </div>
          )}
        </div>
      )}

      <input {...getInputProps()} />
    </>
  );
}
