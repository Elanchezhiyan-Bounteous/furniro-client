"use client";

import { ImageViewerProps } from "@/src/types/IconTypes";
import { useState } from "react";

const ImageViewer = ({ images }: ImageViewerProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse md:flex-row py-5 px-4 gap-4 justify-around w-full md:w-1/2">
      <div className="flex flex-row md:flex-col gap-2 justify-between items-start ">
        {images.map((image, index) => {
          return (
            image !== selectedImage && (
              <div
                key={index}
                className="cursor-pointer  w-full "
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-24 h-20 object-contain
               rounded-lg transition-transform transform group-hover:scale-110 duration-300 bg-[#F9F1E7]"
                />
              </div>
            )
          );
        })}
      </div>

      <div className="w-full max-w-lg h-96">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full rounded-lg bg-[#F9F1E7] "
        />
      </div>
    </div>
  );
};

export default ImageViewer;
