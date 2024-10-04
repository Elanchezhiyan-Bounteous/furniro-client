import Image from "next/image";
import React from "react";

import { productDetails } from "@/src/data/products";
import { Typography } from "../common/Typography";
import Button from "../common/Button";
import ShareIcon from "@/public/assets/icons/ShareIcon";
import CompareIcon from "@/public/assets/icons/CompareIcon";
import LikeIcon from "@/public/assets/icons/LikeIcon";

const ProductsList = () => {
  return (
    <div className="grid grid-cols-4 gap-y-10 gap-x-10 px-40 py-16">
      {productDetails.map((product, index) => (
        <div
          key={index}
          className="w-full  relative  group transition-transform transform hover:scale-95 hover:shadow-lg"
        >
          <Image
            src={product.src}
            alt={product.name}
            width={285}
            height={301}
            className="w-full"
          />
          <div className="p-4 bg-[#F4F5F7] w-full">
            <Typography as="h2" className="font-semibold text-xl font-poppins">
              {product.name}
            </Typography>
            <Typography as="p" className="text-gray-500 font-poppins">
              {product.description}
            </Typography>
            <div className="mt-2">
              <Typography
                as="span"
                className="text-xl font-bold text-primary font-poppins"
              >
                {product.price}
              </Typography>
              {product.originalPrice && (
                <Typography
                  as="span"
                  className="text-gray-400 line-through  ml-2 mt-2 p-1 font-poppins"
                >
                  {product.originalPrice}
                </Typography>
              )}
            </div>
            {product.discount && (
              <div
                className={`absolute top-5 right-5 rounded-full ${
                  product.discount === "New"
                    ? "bg-[#2EC1AC] py-3 px-2"
                    : " bg-[#E97171] py-3 px-1"
                }  text-white  font-poppins font-medium `}
              >
                {product.discount}
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col gap-4 justify-center items-center transition-opacity duration-300">
            <Button
              variant="v2"
              size="large"
              value=" Add to cart"
              className=""
            />
            <div className="flex flex-row gap-6 text-white items-center">
              <div className="flex flex-row gap-1 items-center">
                <ShareIcon/>
                <button className="hover:text-gray-400 font-poppins">Share</button>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <CompareIcon/>
                <button className="hover:text-gray-400 font-poppins">Compare</button>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <LikeIcon/>
                <button className="hover:text-gray-400 font-poppins">Like</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
