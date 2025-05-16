"use server"


import { fetchWrapper } from "../ts/fetchWrapper";


export async function getCategories() {
    const resp = await fetchWrapper.get(`categories`);
    return resp;
}

export async function findAll(currentPage: number, ITEMS_PER_PAGE: number) {
    const resp = await fetchWrapper.get(`products/findAll/${currentPage}/${ITEMS_PER_PAGE}`);
    return resp;
}

export async function findByCategory(category: string, currentPage: number, ITEMS_PER_PAGE: number) {
    const resp = await fetchWrapper.get(`products/findByCategory/${category}/${currentPage}/${ITEMS_PER_PAGE}`);
    return resp;
}

export async function getProductPageData(slug : string) {

    const resp = await fetchWrapper.get(`products/getProductPage/${slug}`);

    console.log("resp -prod page: ", resp)

    return resp;
}


// export async function getCount(ITEMS_PER_PAGE: number) {
//     const count = productsService.count(ITEMS_PER_PAGE)
//     return count;
// }
