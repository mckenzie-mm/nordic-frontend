export type IProductDTO = {
  id?: number;
  category?: string;
  slug?: string;
  name: string;
  price: number; 
  description: string;
  smallImage: Array<string>; 
  mediumImage: Array<string>;
  largeImage: Array<string>; 
  availability: number; 
}

