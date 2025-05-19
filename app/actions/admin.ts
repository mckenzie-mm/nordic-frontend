"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchWrapper } from "../ts/fetchWrapper";

export async function handleProduct(req: FormData) {
    const response = await fetch("http://localhost:5037/admin/form", {
        method: "POST",
        body: req
    });
}

export async function getFormData(slug: string) {
    const response = await fetch(`http://localhost:5037/admin/form/${slug}`);
    const { categories, productDTO} = await response.json();
    return {
        productDTO: productDTO,
        categoriesDTO: categories
    };
}

export async function deleteProduct(id: number) {
  //  productsService.delete(id);
    // revalidatePath('/admin');
    // redirect('/admin');
}

export async function getCount(ITEMS_PER_PAGE: number) {
    const count = await fetchWrapper.get('admin/count');
    return Math.ceil(Number(count) / ITEMS_PER_PAGE);
}
