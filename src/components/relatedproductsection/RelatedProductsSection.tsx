"use client";

import { productDetails } from "@/src/data/products";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import ShareIcon from "@/public/assets/icons/ShareIcon";
import CompareIcon from "@/public/assets/icons/CompareIcon";
import LikeIcon from "@/public/assets/icons/LikeIcon";

const RelatedProductsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? productDetails : productDetails.slice(0, 4);
  return (
    <div className="md:px-32 py-10">
      <h2 className="text-center text-3xl font-semibold pb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-1 gap-y-10 px-4 py-5 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 md:gap-x-10 transition-opacity duration-300">
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className="relative w-full group transition-transform transform hover:scale-95 hover:shadow-lg"
          >
            <Image
              src={product.src}
              alt={product.name}
              width={285}
              height={301}
              className="w-full"
            />
            <div className="p-4 bg-[#F4F5F7] w-full">
              <h2 className="font-semibold text-xl">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <div className="mt-2">
                <span className="text-xl font-bold text-primary">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              {product.discount && (
                <div
                  className={`absolute top-5 right-5 rounded-full ${
                    product.discount === "New"
                      ? "bg-[#2EC1AC] py-3 px-2"
                      : "bg-[#E97171] py-3 px-1"
                  } text-white font-medium`}
                >
                  {product.discount}
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col gap-4 justify-center items-center transition-opacity duration-300">
              <Button variant="v2" size="large" value="Add to cart" />
              <div className="flex flex-row gap-6 text-white items-center">
                <div className="flex flex-row gap-1 items-center">
                  <ShareIcon />
                  <button className="hover:text-gray-400 font-poppins">
                    Share
                  </button>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <CompareIcon />
                  <button className="hover:text-gray-400 font-poppins">
                    Compare
                  </button>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <LikeIcon />
                  <button className="hover:text-gray-400 font-poppins">
                    Like
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {showAll ? (
          <Button
            variant="v5"
            size="large"
            value="Show Less"
            onClick={() => setShowAll(false)}
            className="px-16 py-2"
          />
        ) : (
          <Button
            variant="v5"
            size="large"
            value="Show More"
            onClick={() => setShowAll(true)}
            className="px-20 py-2"
          />
        )}
      </div>
    </div>
  );
};

export default RelatedProductsSection;
