import FeatureSection from "@/src/components/featuresection/FeatureSection";
import HeroSection from "@/src/components/herosection/HeroSection";
import ProductsList from "@/src/components/productslist/ProductsList";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <ProductsList />
      <FeatureSection/>
    </div>
  );
};

export default page;
