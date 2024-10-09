"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Typography } from "../common/Typography";
import Dropdown from "../common/Dropdown";
import ProductsListSection from "../productslistsection/ProductsListSection";
import VectorIcon from "@/public/assets/icons/VectorIcon";
import RoundGridIcon from "@/public/assets/icons/RoundGridIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";
import PaginationControls from "../paginationcontrolsection/PaginationControls";
import { useGetAllProducts } from "@/src/hooks/useProduct";
import { ProductForApi } from "@/src/types/IconTypes";
import FilterSectionSkeleton from "../skeletons/FilterSectionSkeleton";

const ProductsListControl = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "16";

  const {
    data: productsofapi,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProducts();

  const [currentPage, setCurrentPage] = useState<number>(Number(page));
  const [productsPerPage, setProductsPerPage] = useState<number>(
    Number(per_page)
  );

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setTimeout(() => {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    }, 300);
  };

  const [sortedProducts, setSortedProducts] = useState<ProductForApi[]>([]);

  const [sortOption, setSortOption] = useState<string | number>("Default");

  const options = [
    "Default",
    "A to Z",
    "Z to A",
    "Price Low to High",
    "Price High to Low",
  ];
  const showAsOptions = [8, 16, 24, 32];

  const handleSortChange = (value: string | number) => {
    setSortOption(value);
  };

  const handleShowAsChange = (value: number | string) => {
    setProductsPerPage(Number(value));
  };

  const applySorting = (products: ProductForApi[], sortBy: string | number) => {
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
    if (isSuccess && productsofapi) {
      const updatedProducts = applySorting(
        productsofapi as ProductForApi[],
        sortOption
      );
      setSortedProducts(updatedProducts);
    }
  }, [sortOption, isSuccess, productsofapi]);

  const currentProducts =
    sortedProducts.length > 0 ? sortedProducts.slice(start, end) : [];

  useEffect(() => {
    router.push(`/shop/?page=${currentPage}&per_page=${productsPerPage}`);
  }, [productsPerPage, currentPage]);

  const [isGridView, setIsGridView] = useState(true);

  const toggleView = (viewType: string) => {
    setIsGridView(viewType === "grid");
  };


  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return (
      <>
      <FilterSectionSkeleton/>
      <div className="flex flex-col gap-5 md:gap-0">
        {isGridView ? (
          <div
            className={`grid grid-cols-1 gap-y-10 px-8 py-5 md:grid-cols-3 lg:grid-cols-4 md:gap-y-10 md:gap-x-8 lg:gap-x-10 md:px-10 lg:px-40  md:py-10 lg:py-16 transition-opacity duration-300`}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-full relative animate-pulse bg-gray-200 p-4 rounded-md"
              >
                <div className="w-full h-48 bg-gray-300 rounded-md"></div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
                  <div className="h-4 w-2/4 bg-gray-300 rounded-md"></div>
                  <div className="h-6 w-1/4 bg-gray-300 rounded-md mt-2"></div>
                </div>
                <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-10 w-28 bg-gray-300 rounded-md"></div>
                  <div className="flex flex-row gap-6 text-white items-center">
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-8 px-8 py-5 md:px-40 md:py-16">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="w-full flex flex-col md:flex-row gap-6 items-center bg-gray-200 p-5 rounded-lg shadow-md animate-pulse"
              >
                <div className="w-full h-48 md:w-48 bg-gray-300 rounded-md"></div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
                  <div className="h-4 w-2/4 bg-gray-300 rounded-md"></div>
                  <div className="h-6 w-1/4 bg-gray-300 rounded-md"></div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <div className="h-10 w-28 bg-gray-300 rounded-md"></div>
                  <div className="flex flex-row gap-6 text-gray-600">
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </>
      
    );
  }

  return (
    <>
      <div className="h-40 md:h-24  bg-[#F9F1E7] flex flex-col gap-8 justify-center px-6 md:flex-row md:justify-between md:px-6 lg:px-28 md:items-center">
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row justify-between gap-2">
            <VectorIcon className="h-6 w-6" />
            <Typography as="p" className="font-poppins text-xl font-[400]">
              Filter
            </Typography>
          </div>
          <div className="" onClick={() => toggleView("grid")}>
            <RoundGridIcon
              className={`h-7 w-7 object-contain ${
                isGridView ? "bg-[#B88E2F]  rounded-lg p-0.5 h-9 w-9" : ""
              }`}
            />
          </div>
          <div className="" onClick={() => toggleView("list")}>
            <ViewListIcon
              className={`h-7 w-7 ${
                !isGridView ? "bg-[#B88E2F] rounded-lg p-1 h-8 w-8" : ""
              }`}
            />
          </div>
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

      <ProductsListSection products={currentProducts} gridView={isGridView} />

      <PaginationControls
        hasNextPage={end < sortedProducts.length}
        hasPrevPage={start > 0}
        onPageChange={handlePageChange}
        page={currentPage}
        totalPages={Math.ceil(sortedProducts.length / productsPerPage)}
      />
    </>
  );
};

export default ProductsListControl;
