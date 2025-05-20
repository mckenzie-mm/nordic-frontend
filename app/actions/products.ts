"use server"

export const findAll = async (currentPage: number, ITEMS_PER_PAGE: number) => {
    const response = await fetch(`http://localhost:5037/products/list/${currentPage}/${ITEMS_PER_PAGE}`);
    const data = await response.json();
    return data;
}


export const findByCategory = async (category: string, currentPage: number, ITEMS_PER_PAGE: number) => {
    const response = await fetch(`http://localhost:5037/products/list/${category}/${currentPage}/${ITEMS_PER_PAGE}`);
    const data = await response.json();
    return data;
}

export const getProductPageData = async (slug : string) => {
    const response = await fetch(`http://localhost:5037/products/page/${slug}`);
    const data = await response.json();
    return data;
}

   

