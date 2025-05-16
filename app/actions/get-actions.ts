"use server"

import { fetchWrapper } from "../ts/fetchWrapper";

export const getCategories = async () => await fetchWrapper.get(`categories`);

export const findAll = async (currentPage: number, ITEMS_PER_PAGE: number) => 
    await fetchWrapper.get(`products/findAll/${currentPage}/${ITEMS_PER_PAGE}`);

export const findByCategory = async (category: string, currentPage: number, ITEMS_PER_PAGE: number) => 
    await fetchWrapper.get(`products/findByCategory/${category}/${currentPage}/${ITEMS_PER_PAGE}`);

export const getProductPageData = async (slug : string) => 
    await fetchWrapper.get(`products/getProductPage/${slug}`);
   

// export async function getCount(ITEMS_PER_PAGE: number) {
//     const count = productsService.count(ITEMS_PER_PAGE)
//     return count;
// }
