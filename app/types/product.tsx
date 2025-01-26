export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description? : string;
  images? : Array<string>;
  variants? : Array<string>;
}

export  interface ProvidersProps {
  children: React.ReactNode;
}