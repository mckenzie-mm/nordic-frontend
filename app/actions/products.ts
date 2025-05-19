"use server"
import { fetchWrapper } from "../ts/fetchWrapper";

export const findAll = async (currentPage: number, ITEMS_PER_PAGE: number) => 
    await fetchWrapper.get(`products/list/${currentPage}/${ITEMS_PER_PAGE}`);

export const findByCategory = async (category: string, currentPage: number, ITEMS_PER_PAGE: number) => 
    await fetchWrapper.get(`products/list/${category}/${currentPage}/${ITEMS_PER_PAGE}`);

export const getProductPageData = async (slug : string) => 
    await fetchWrapper.get(`products/page/${slug}`);
   

