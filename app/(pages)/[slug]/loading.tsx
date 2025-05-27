"use client";

import Card from "@/app/ui/card";

export type IProductDTO = {
  id?: number;
  category?: string;
  slug?: string;
  name: string;
  price: number; 
  description: string;
  images: Array<string>; 
  availability: number; 
}

const productsDTO = [
    {
      category: "bracelets",
      slug: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 100, 
      images: ["test"],
      availability: 10
    },
     {
      category: "bracelets",
      slug: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
      images: ["test"],
      availability: 10
    },
    {
      category: "bracelets",
      slug: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
      images: ["test"],
      availability: 10
    },
   {
      category: "bracelets",
      slug: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
      images: ["test"],
      availability: 10
    },
   {
      category: "bracelets",
      slug: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
      images: ["test"],
      availability: 10
    },
 {
      category: "bracelets",
      slug: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
      images: ["test"],
      availability: 10
    },
]



export default function Skeleton() {

  return (
    <>
      <div className="category-header">
          <section className="section">
              <h1 className="category-name">{"Bracelets"}</h1>
          </section>
      </div>
        <section className="section">
            <div className="grid-products">
            {productsDTO.map((productDTO, index) => 
                <Card productDTO={productDTO} key={index} />)
            }
            </div>
        </section>
    </>
  );
}

  