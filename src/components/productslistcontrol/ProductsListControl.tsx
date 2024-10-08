"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { productDetails } from "@/src/data/products";
import { Typography } from "../common/Typography";
import Dropdown from "../common/Dropdown";
import ProductsListSection from "../productslistsection/ProductsListSection";
import VectorIcon from "@/public/assets/icons/VectorIcon";
import RoundGridIcon from "@/public/assets/icons/RoundGridIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import { Product } from "@/src/types/IconTypes";
import PaginationControls from "../paginationcontrolsection/PaginationControls";

const ProductsListControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "16";

  const [currentPage, setCurrentPage] = useState<number>(Number(page));
  const [productsPerPage, setProductsPerPage] = useState<number>(Number(per_page));

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const totalPages = Math.ceil(productDetails.length / productsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setTimeout(() => {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    }, 300);
  };

  const [sortedProducts, setSortedProducts] = useState<Product[]>(productDetails);
  const [sortOption, setSortOption] = useState<string | number>("Default");

  const options = ["Default","A to Z", "Z to A", "Price Low to High", "Price High to Low"];
  const showAsOptions = [8, 16, 24, 32];

  const handleSortChange = (value: string | number) => {
    setSortOption(value);
  };

  const handleShowAsChange = (value: number | string) => {
    setProductsPerPage(Number(value));
  };

  const applySorting = (products: Product[], sortBy: string | number) => {
    let sortedArray = [...products];
    switch (sortBy) {
      case "A to Z":
        sortedArray = sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        sortedArray = sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price Low to High":
        sortedArray = sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "Price High to Low":
        sortedArray = sortedArray.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedArray = products;
        break;
    }
    return sortedArray;
  };

  useEffect(() => {
    const updatedProducts = applySorting(productDetails, sortOption);
    setSortedProducts(updatedProducts);
  }, [sortOption]);

  const currentProducts = sortedProducts.slice(start, end);

  useEffect(() => {
    router.push(`/shop/?page=${currentPage}&per_page=${productsPerPage}`);
  }, [productsPerPage, currentPage]);

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
            Showing {start + 1}–{Math.min(end, sortedProducts.length)} of{" "}
            {sortedProducts.length} results
          </Typography>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <div className="flex flex-row gap-3 items-center">
            <p className="text-xl ml-4">Show</p>
            <Dropdown
              options={showAsOptions}
              selectedValue={productsPerPage}
              onChange={handleShowAsChange}
            />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <p className="text-xl">Sort</p>
            <Dropdown
              options={options}
              selectedValue={sortOption}
              onChange={handleSortChange}
            />
          </div>
        </div>
      </div>

      <ProductsListSection products={currentProducts} />

      <PaginationControls
        hasNextPage={end < sortedProducts.length}
        hasPrevPage={start > 0}
        onPageChange={handlePageChange}
        page={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default ProductsListControl;
