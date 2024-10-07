
export interface IconProps {
  className?: string;
}

export interface ImageViewerProps {
  images : string[];
}

export interface Color  {
  name: string;
  value: string;
};

export interface Image  {
  alt: string;
  image: string;
};

export interface ShareLinks  {
  facebook: string;
  linkedin: string;
  twitter: string;
};

export interface Product {
  id?:string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  src: string;
  discount: string | null;
  reviews: number;
  rating: number;
  sku: string;
  category: string;
  tags: string[];
  shareLinks: ShareLinks;
  sizes: string[];
  colors: Color[];
  thumbNailImages: Image[];
  descriptionImages: Image[];
};

