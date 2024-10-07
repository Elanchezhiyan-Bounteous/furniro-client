import FeatureSection from "@/src/components/featuresection/FeatureSection";
import HeroSection from "@/src/components/herosection/HeroSection";
import ProductsList from "@/src/components/productslist/ProductsList";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="">
        <HeroSection />
        <ProductsList />
        <FeatureSection />
      </div>
    </Suspense>
  );
};

export default page;
