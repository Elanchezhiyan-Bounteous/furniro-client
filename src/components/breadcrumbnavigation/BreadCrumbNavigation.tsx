import React from "react";
import { Typography } from "../common/Typography";
import RightArrowIcon from "@/public/assets/icons/RightArrowIcon";

const BreadCrumbNavigation = () => {
  return (
    <div className="h-24 bg-[#F9F1E7] flex flex-row justify-between px-28 items-center">
      <div className="flex flex-row gap-6 items-center">
        <Typography as="p" className="text-xl text-[#9F9F9F] font-[400]">
          Home
        </Typography>

        <RightArrowIcon />
        <Typography as="p" className="text-xl text-[#9F9F9F] font-[400]">
          Shop
        </Typography>
        <div className="w-[2px] h-8 bg-[#9F9F9F]/70 mx-2 "></div>
        <Typography as="p" className="text-base font-poppins">
          Asgaard Sofa
        </Typography>
      </div>
    </div>
  );
};

export default BreadCrumbNavigation;
