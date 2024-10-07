"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { productDetails } from "@/src/data/products";
import { Typography } from "../common/Typography";
import Button from "../common/Button";
import ShareIcon from "@/public/assets/icons/ShareIcon";
import CompareIcon from "@/public/assets/icons/CompareIcon";
import LikeIcon from "@/public/assets/icons/LikeIcon";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationControls from "../paginationcontrolsection/PaginationControls";
import VectorIcon from "@/public/assets/icons/VectorIcon";
import RoundGridIcon from "@/public/assets/icons/RoundGridIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import { Product } from "@/src/types/IconTypes";

const ProductsList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "16";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  useEffect(() => {
    const updatedProducts = productDetails.slice(start, end);
    setCurrentProducts(updatedProducts);
  }, [page, per_page]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) {
      const updatedProducts = productDetails.slice(start, start + value);
      setCurrentProducts(updatedProducts);
    }
  };

  const totalPages = Math.ceil(productDetails.length / Number(per_page));

  const handlePageChange = (newPage: number) => {
    router.push(`/shop/?page=${newPage}&per_page=${per_page}`);

    setTimeout(() => {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <>
      <div className="h-40 md:h-24 bg-[#F9F1E7] flex flex-col gap-8 justify-center px-6 md:flex-row md:justify-between md:px-28 md:items-center">
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row gap-2">
            <VectorIcon className="h-6 w-6" />
            <Typography as="p" className="font-poppins text-xl font-[400]">
              Filter
            </Typography>
          </div>
          <RoundGridIcon className="h-7 w-7" />
          <ViewListIcon className="h-7 w-7" />
          <div className="w-[2px] h-8 bg-[#9F9F9F]/70 mx-2 "></div>
          <Typography as="p" className="text-base font-poppins">
            Showing {start + 1}–{end} of {productDetails.length} results
          </Typography>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <div className="flex flex-row gap-3 items-center">
            <Typography as="p" className="text-xl">
              Show
            </Typography>
            <input
              type="number"
              onChange={handleInputChange}
              className="h-14 w-14 text-xl font-poppins text-[#9F9F9F] bg-white flex justify-center items-center border border-[#9F9F9F] text-center"
              min="1"
            />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Typography as="p" className="text-xl">
              Sort
            </Typography>
            <div className="h-14 w-44 px-6 font-poppins text-[#9F9F9F] text-xl bg-white flex text-left items-center">
              Default
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-0">
        <div
          className={`grid grid-cols-1 gap-y-10 px-8 py-5 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 md:gap-x-10 md:px-40 md:py-16 transition-opacity duration-300`}
        >
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="w-full relative  group transition-transform transform hover:scale-95 hover:shadow-lg"
              onClick={() => router.push("/singleproduct")}
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
                  {product.description}
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
                      className="text-gray-400 line-through ml-2  font-poppins"
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

        <PaginationControls
          hasNextPage={end < productDetails.length}
          hasPrevPage={start > 0}
          onPageChange={handlePageChange}
          page={Number(page)}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default ProductsList;
