"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleProduct(req: FormData) {
    const response = await fetch("http://localhost:5037/products/form", {
        method: "POST",
        body: req
    });
}

export async function getFormData(slug: string) {
    const response = await fetch(`http://localhost:5037/products/form/${slug}`);
    const { categories, productDTO} = await response.json();
    return {
        productDTO: productDTO,
        categoriesDTO: categories
    };
}
