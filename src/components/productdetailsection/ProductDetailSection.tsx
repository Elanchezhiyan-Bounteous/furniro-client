"use client";

import FacebookIcon from "@/public/assets/icons/FacebookIcon";
import LinkedInIcon from "@/public/assets/icons/LinkedInIcon";
import TwitterIcon from "@/public/assets/icons/TwitterIcon";
import React, { useState } from "react";

const ProductDetailSection = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: string) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="w-1/2">
      <h1 className="text-4xl font-semibold mb-2">Asgaard Sofa</h1>

      <div className="flex flex-col gap-6">
        <p className="text-2xl text-gray-600 ">Rs. 250,000.00</p>

        <div className="flex flex-row gap-2 items-center ">
          <span className="text-yellow-400 ">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <div className="w-[2px] h-8 bg-[#9F9F9F]/70 mx-2 "></div>

          <span className="ml-2 text-gray-600">5 Customer Review</span>
        </div>

        <p className="text-gray-700 ">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Size</h4>
          <div className="flex flex-row gap-2">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              L
            </button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              XL
            </button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              XS
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold">Color</h4>
          <div className="flex flex-row gap-2 items-center">
            <div className="w-6 h-6 bg-purple-500 rounded-full cursor-pointer"></div>
            <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
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

          <button className="px-6 py-2 border rounded-lg border-black hover:bg-gray-100 text-black ">
            Add To Cart
          </button>
          <button className="px-6 py-2 border rounded-lg border-black hover:bg-gray-100">
            + Compare
          </button>
        </div>
        <hr className="my-8 flex " />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-gray-600">SKU : SS001</p>
        <p className="text-gray-600">Category : Sofas</p>
        <p className="text-gray-600">Tags : Sofa, Chair, Home, Shop</p>
        <div className="flex flex-row gap-3">
          <p className="text-gray-600">Share :</p>
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
