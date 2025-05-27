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
    slug: "my-name",
    name: "my name",
    price: 10, 
    description: "",
    images: ["test"],
    availability: 10
    }
]



export default function Skeleton() {

  return (
    <>
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

  