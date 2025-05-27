"use client";

import Card from "@/app/ui/card";
import CardSkeleton from "./card-skeleton";

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

const arr = [
    {
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 100, 
    },
     {
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
    },
    {
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
    },
   {
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
    },
   {
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
    },
 {
      name: "Vintage Style Alloy Brooch With Artificial Crystal Accents",
      price: 10, 
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
            {arr.map(({name, price}, index) => 
                <CardSkeleton name={name} price={price} key={index} />)
            }
            </div>
        </section>
    </>
  );
}

  