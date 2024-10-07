import BreadCrumbNavigation from "@/src/components/breadcrumbnavigation/BreadCrumbNavigation";
import ImageViewer from "@/src/components/imageviewer/ImageViewer";
import ProductDetailSection from "@/src/components/productdetailsection/ProductDetailSection";
import ProductInformationSection from "@/src/components/productinformationsection/ProductInformationSection";
import RelatedProductsSection from "@/src/components/relatedproductsection/RelatedProductsSection";
import { images } from "@/src/data/images";
import React from "react";

const page = () => {


  return (
    <>
      <BreadCrumbNavigation />
      <div className="flex flex-col md:flex-row md:items-start md:px-28 md:py-10 md:gap-8">
        <ImageViewer images={images} />
        <ProductDetailSection />
      </div>
      <hr />
      <ProductInformationSection />
      <RelatedProductsSection/>

      
    </>
  );
};

export default page;
