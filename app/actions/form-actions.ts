"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fromFormData, toFormDTO } from "../DTO-mappings/form-data-mappings";
import { fetchWrapper } from "../ts/fetchWrapper";

export async function handleProduct(req: FormData) {

    const response = await fetch("http://localhost:5037/products/form", {
        method: "POST",
        body: req
    });

    console.log("res ", response)
}

export async function getFormData(slug: string) {
    const categories = await fetchWrapper.get('categories');
    const product = await fetchWrapper.get(`products/${slug}`);
    const formDTO = toFormDTO(product, categories);
    return formDTO;
}
