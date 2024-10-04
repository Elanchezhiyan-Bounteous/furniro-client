import React from "react";
import FurniroLogo from "../../../public/assets/icons/FurniroLogo";
import CartIcon from "../../../public/assets/icons/CartIcon";
import HeartIcon from "../../../public/assets/icons/HeartIcon";
import ProfileAlertIcon from "../../../public/assets/icons/ProfileAlertIcon";
import SearchIcon from "../../../public/assets/icons/SearchIcon";
import Link from "next/link";
import { Typography } from "./Typography";

const Navbar = () => {
  return (
    <div className="w-full bg-white text-black justify-between px-12 font-montserrat items-center flex flex-row py-6">
      <div className="flex flex-row items-center gap-1">
        <FurniroLogo />
        <Typography as="h1" className="text-3xl font-bold">
          Furniro
        </Typography>
      </div>
      <div className="flex flex-row gap-80">
        <div className="flex flex-row gap-20 items-center">
          <Link href="/home">
            <Typography as="p" className="text-base font-poppins font-medium">
              Home
            </Typography>
          </Link>
          <Link href="/shop">
            <Typography as="p" className="text-base font-poppins font-medium">
              Shop
            </Typography>
          </Link>
          <Link href="/about">
            <Typography as="p" className="text-base font-poppins font-medium">
              About
            </Typography>
          </Link>
          <Link href="/contact">
            <Typography as="p" className="text-base font-poppins font-medium">
              Contact
            </Typography>
          </Link>
        </div>
        <div className="flex flex-row gap-12 items-center">
          <ProfileAlertIcon className="w-7 h-7" />
          <SearchIcon className="w-7 h-7" />
          <HeartIcon className="w-7 h-7" />
          <CartIcon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
