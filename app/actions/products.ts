"use server"
import { fetchWrapper } from "../ts/fetchWrapper";

export const findAll = async (currentPage: number, ITEMS_PER_PAGE: number) => {
    const response = await fetch(`http://localhost:5037/products/list/${currentPage}/${ITEMS_PER_PAGE}`);

    console.log("response ", response);

    const data = await response.json();

    console.log("data ", data)
}


export const findByCategory = async (category: string, currentPage: number, ITEMS_PER_PAGE: number) => 
    await fetchWrapper.get(`products/list/${category}/${currentPage}/${ITEMS_PER_PAGE}`);

export const getProductPageData = async (slug : string) => 
    await fetchWrapper.get(`products/page/${slug}`);
   

