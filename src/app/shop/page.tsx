import Button from "@/src/components/common/Button";
import FeatureSection from "@/src/components/featuresection/FeatureSection";
import FilterSection from "@/src/components/filtersection/FilterSection";
import HeroSection from "@/src/components/herosection/HeroSection";
import ProductsList from "@/src/components/productslist/ProductsList";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection />
      <FilterSection />
      <ProductsList />
      <div className="flex flex-row justify-center gap-6 pb-10">
        <Button variant="v3" size="medium" value="1" />
        <Button variant="v3" size="medium" value="2" />
        <Button variant="v3" size="medium" value="3" />
        <Button variant="v3" size="medium" value="Next" className="px-6" />
      </div>
      <FeatureSection/>
    </div>
  );
};

export default page;
