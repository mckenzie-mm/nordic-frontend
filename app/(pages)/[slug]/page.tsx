
import { findByCategory } from "@/app/actions/products";
import ProductsListByCategory from "@/app/ui-client/products-list-by-category";
import { Suspense } from "react";
import Skeleton from "./skeleton";

export default async function CategoryPage({ params, }: {params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    let productsDTO;
    if (slug) {
        productsDTO = await findByCategory(slug, 1, 12);  
    }
    return (
        <>
            <div className="category-header">
                <section className="section">
                    <h1 className="category-name">{slug}</h1>
                </section>
            </div>
            {
                <Suspense fallback={<Skeleton />}>
                    <ProductsListByCategory 
                                        inititalProducts={productsDTO} 
                                        hasMore={true} 
                                        category={slug}
                    />                
                </Suspense>
            }
        </>
    );
}

