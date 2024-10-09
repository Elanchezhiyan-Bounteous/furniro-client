"use client";

import { SingleProductComponentsProp } from "@/src/types/IconTypes";
import { useEffect, useState } from "react";

const ImageViewer = ({
  productDetails,
  isLoading,
  isSuccess,
}: SingleProductComponentsProp) => {
  const [selectedImage, setSelectedImage] = useState<string>();

  useEffect(() => {
    if (isSuccess) {
      setSelectedImage(productDetails?.productGallery[0].imageUrl);
    }
  }, [productDetails]);

  if (isLoading || !selectedImage) {
    return (
      <div className="flex flex-col-reverse md:flex-row md:px-8 md:py-2 lg:py-5 lg:px-4 gap-4 justify-around w-full lg:w-1/2 animate-pulse">
        <div className="flex flex-row md:flex-col gap-2 justify-between items-start w-full md:w-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-24 h-20 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
        <div className="w-full max-w-lg h-96 bg-gray-300 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row py-5 px-8 md:p-3 lg:py-5 lg:px-4 gap-4 justify-around w-full lg:w-1/2">
      <div className="flex flex-row lg:flex-col gap-2 justify-between items-start ">
        {productDetails?.productGallery.map((image, index) => {
          return (
            image.imageUrl !== selectedImage && (
              <div
                key={index}
                className="cursor-pointer  w-full "
                onClick={() => setSelectedImage(image.imageUrl)}
              >
                <img
                  src={image.imageUrl}
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
