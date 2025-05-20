"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchWrapper } from "../ts/fetchWrapper";

export async function postProduct(req: FormData) {
    const response = await fetch("http://localhost:5037/admin/form", {
        method: "POST",
        body: req
    });
}

export async function putProduct( id: number, req: FormData ) {
    const response = await fetch(`http://localhost:5037/admin/form/${id}`, {
        method: "PUT",
        body: req
    });
}

export async function getForm(productSlug: string) {
    const response = await fetch(`http://localhost:5037/admin/form/${productSlug}`);

    const { 
        id,
        name,
        price,
        smallImage,
        slug, 
        description,
        availability,
        category,
        categories 
    } = await response.json();

    return {
        id,
        name,
        price,
        smallImage,
        slug, 
        description,
        availability,
        category,
        categories 
    };
}

export async function deleteProduct(id: number) {
    const response = await fetch(`http://localhost:5037/admin/form/${id}`, {
        method: "DELETE"
    });
    // revalidatePath('/admin');
    // redirect('/admin');
}

export async function getCount(ITEMS_PER_PAGE: number) {
    const count = await fetchWrapper.get('admin/count');
    return Math.ceil(Number(count) / ITEMS_PER_PAGE);
}
