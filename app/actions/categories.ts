"use server"

import { fetchWrapper } from "../ts/fetchWrapper";
//import { productsService } from "../services/products-service";

export const getCategories = async () => await fetchWrapper.get(`categories`);