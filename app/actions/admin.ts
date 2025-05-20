"use server"

const WEB_API_URL = process.env.WEB_API_URL;

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function postProduct(req: FormData) {
    const name = req.get("name")?.toString();
    const slug = name ? name.replaceAll(" ", "-") : "";
    req.set("slug", slug.toLowerCase());
    const response = await fetch(`${WEB_API_URL}/admin/form`, {
        method: "POST",
        body: req
    });
}

export async function putProduct( id: number, req: FormData ) {
    const response = await fetch(`${WEB_API_URL}/admin/form/${id}`, {
        method: "PUT",
        body: req
    });
}

export async function getForm(productSlug: string) {
    const response = await fetch(`${WEB_API_URL}/admin/form/${productSlug}`);
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
    const response = await fetch(`${WEB_API_URL}/admin/${id}`, {
        method: "DELETE"
    });
    revalidatePath('/admin');
    redirect('/admin');
}

export async function getCount(ITEMS_PER_PAGE: number) {
    const response = await fetch(`${WEB_API_URL}/admin/count`);
    const count = await response.json();
    return  Math.ceil(Number(count) / ITEMS_PER_PAGE);
}
