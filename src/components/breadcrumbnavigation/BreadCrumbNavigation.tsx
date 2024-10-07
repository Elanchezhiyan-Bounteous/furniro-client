"use client"
import React from "react";
import { Typography } from "../common/Typography";
import RightArrowIcon from "@/public/assets/icons/RightArrowIcon";
import { useRouter} from "next/navigation";


const BreadCrumbNavigation = () => {
  const router = useRouter();
  return (
    <div className=" bg-[#F9F1E7] flex flex-row h-24 justify-between md:px-28 items-center">
      <div className="flex flex-row gap-6 items-center">
        <Typography as="p" className="text-xl text-[#9F9F9F] font-[400] hover:cursor-pointer hover:underline" onClick={() => router.push("/home")}>
          Home
        </Typography>

        <RightArrowIcon />
        <Typography as="p" className="text-xl text-[#9F9F9F] font-[400] hover:cursor-pointer  hover:underline" onClick={() => router.push("/shop")}>
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
