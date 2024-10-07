
export interface IconProps {
  className?: string;
}

export interface ImageViewerProps {
  images : string[];
}

export interface Product {
  name: string;
  description: string;
  price: string;
  originalPrice: string | null;
  src: string;
  discount: string | null;
}
