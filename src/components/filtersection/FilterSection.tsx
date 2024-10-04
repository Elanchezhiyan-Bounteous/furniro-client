import VectorIcon from "@/public/assets/icons/VectorIcon";
import React from "react";
import { Typography } from "../common/Typography";
import RoundGridIcon from "@/public/assets/icons/RoundGridIcon";
import ViewListIcon from "@/public/assets/icons/ViewListIcon";

const FilterSection = () => {
  return (
    <div className="h-24 bg-[#F9F1E7] flex flex-row justify-between px-28 items-center">
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
          Showing 1–16 of 32 results
        </Typography>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div className="flex flex-row gap-3 items-center">
          <Typography as="p" className="text-xl">
            Show
          </Typography>
          <div className="h-14 w-14 text-xl font-poppins text-[#9F9F9F] bg-white flex justify-center items-center">
            16
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Typography as="p" className="text-xl">
            Sort By
          </Typography>
          <div className="h-14 w-44 px-6 font-poppins text-[#9F9F9F] text-xl bg-white flex text-left items-center">
            Default
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
