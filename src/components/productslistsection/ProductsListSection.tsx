"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Typography } from "../common/Typography";
import Button from "../common/Button";
import ShareIcon from "@/public/assets/icons/ShareIcon";
import CompareIcon from "@/public/assets/icons/CompareIcon";
import LikeIcon from "@/public/assets/icons/LikeIcon";
import { Product, ProductForApi } from "@/src/types/IconTypes";

interface ProductListSectionProps {
  products: ProductForApi[];
  gridView: boolean;
}

const ProductsListSection = ({
  products,
  gridView,
}: ProductListSectionProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 md:gap-0">
      {gridView ? (
        <div
          className={`grid grid-cols-1 gap-y-10 px-8 py-5 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 md:gap-x-8 lg:gap-x-10 md:px-10 lg:px-40  md:py-10 lg:py-16 transition-opacity duration-300`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full relative group transition-transform transform hover:scale-95 hover:shadow-lg"
              onClick={() => router.push(`/singleproduct/?id=${product.id}`)}
            >
              <Image
                src={product.src}
                alt={product.name}
                width={285}
                height={301}
                className="w-full"
              />
              <div className="p-2 pb-4 flex flex-col gap-2 bg-[#F4F5F7] w-full">
                <Typography
                  as="h2"
                  className="font-semibold text-xl font-poppins"
                >
                  {product.name}
                </Typography>
                <Typography as="p" className="text-gray-500 font-poppins">
                  {product.desc}
                </Typography>
                <div className="flex flex-row items-center w-full ">
                  <Typography
                    as="span"
                    className="text-xl font-bold text-primary font-poppins"
                  >
                    {product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      as="span"
                      className="text-gray-400 line-through ml-2 font-poppins"
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
                        : "bg-[#E97171] py-3 px-1"
                    } text-white font-poppins font-medium`}
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
      ) : (
        <div className="flex flex-col gap-8 px-8 py-5 md:px-40 md:py-16 transition-opacity duration-300">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row gap-6 items-center bg-[#F4F5F7] p-5 rounded-lg shadow-md"
              onClick={() => router.push(`/singleproduct/?id=${product.id}`)}
            >
              <Image
                src={product.src}
                alt={product.name}
                width={200}
                height={200}
                className="w-full md:w-auto object-cover"
              />
              <div className="flex flex-col gap-2 flex-1">
                <Typography
                  as="h2"
                  className="font-semibold text-xl font-poppins"
                >
                  {product.name}
                </Typography>
                <Typography as="p" className="text-gray-500 font-poppins">
                  {product.desc}
                </Typography>
                <div className="flex flex-row items-center">
                  <Typography
                    as="span"
                    className="text-xl font-bold text-primary font-poppins"
                  >
                    {product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      as="span"
                      className="text-gray-400 line-through ml-2 font-poppins"
                    >
                      {product.originalPrice}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Button variant="v2" size="large" value="Add to cart" />
                <div className="flex flex-row gap-6 text-gray-600">
                  <button className="hover:text-gray-400 font-poppins flex flex-row gap-1 items-center">
                    <ShareIcon className="stroke-black" />
                    Share
                  </button>
                  <button className="hover:text-gray-400 font-poppins flex flex-row gap-1 items-center">
                    <CompareIcon className="stroke-black" />
                    Compare
                  </button>
                  <button className="hover:text-gray-400 font-poppins flex flex-row gap-1 items-center">
                    <LikeIcon className="fill-black"/>
                    Like
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsListSection;
