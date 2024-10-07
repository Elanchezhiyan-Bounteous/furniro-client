"use client";

import FacebookIcon from "@/public/assets/icons/FacebookIcon";
import LinkedInIcon from "@/public/assets/icons/LinkedInIcon";
import TwitterIcon from "@/public/assets/icons/TwitterIcon";
import { productDetails } from "@/src/data/products";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ProductDetailSection = () => {
  const [quantity, setQuantity] = useState(1);
  const searchParams = useSearchParams();

  const productId = searchParams.get("id") ?? "id2";

  const product = productDetails.find((product) => product.id === productId);

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="py-5 px-8 w-full md:w-1/2">
      <h1 className="text-4xl font-semibold mb-2">{product?.name}</h1>

      <div className="flex flex-col gap-6">
        <p className="text-2xl text-gray-600 ">{product?.price}</p>

        <div className="flex flex-row gap-2 items-center ">
          <span className="text-yellow-400 ">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <div className="w-[2px] h-8 bg-[#9F9F9F]/70 mx-2 "></div>

          <span className="ml-2 text-gray-600">
            {product?.reviews} Customer Review
          </span>
        </div>

        <p className="text-gray-700 ">{product?.description}</p>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Sizes</h4>
          <div className="flex flex-row gap-2">
            {product?.sizes.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Color</h4>

          <div className="flex flex-row gap-2 items-center">
            {product?.colors.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full`}
                style={{backgroundColor: color.value}}
              >
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-4 md:gap-4">
          <div className="flex flex-row items-center border border-[#9F9F9F] rounded-lg ">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="pl-2 py-1  "
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center"
            />
            <button
              onClick={() => handleQuantityChange("increment")}
              className="pr-2 py-1 "
            >
              +
            </button>
          </div>

          <button className="px-2 py-3 md:px-6 md:py-2 border rounded-lg border-black hover:bg-gray-100 ">
            Add To Cart
          </button>
          <button className="px-2 py-3 md:px-6 md:py-2 border rounded-lg border-black hover:bg-gray-100">
            + Compare
          </button>
        </div>
        <hr className="my-8 flex " />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-gray-600">SKU : {product?.sku}</p>
        <p className="text-gray-600">Category : {product?.category}</p>
        <p className="text-gray-600">Tags : {product?.tags}</p>
        <div className="flex flex-row gap-3">
          <p className="text-gray-600">Share : </p>
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
