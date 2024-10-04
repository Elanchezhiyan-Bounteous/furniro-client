import BreadCrumbNavigation from '@/src/components/breadcrumbnavigation/BreadCrumbNavigation'
import ImageViewer from '@/src/components/imageviewer/ImageViewer'
import ProductDetailSection from '@/src/components/productdetailsection/ProductDetailSection'
import { images } from '@/src/data/images'
import React from 'react'


const page = () => {
  return (
    <>
    <BreadCrumbNavigation/>
    <div className="flex flex-row items-start px-28 py-10 gap-8">
    <ImageViewer images={images}/>
    <ProductDetailSection/>
    </div>
   
    </>
    
  )
}

export default page