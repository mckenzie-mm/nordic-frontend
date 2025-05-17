"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { IFormState, ValidateProduct } from "../validation/validate";
import { fromFormData, toFormDTO } from "../DTO-mappings/form-data-mappings";
import { getCategories } from "./get-actions";
import { fetchWrapper } from "../ts/fetchWrapper";

export async function handleProduct(prevState: IFormState, req: FormData) {

   // const product = fromFormData(formData);

    const formData = new FormData();

    formData.set("Name", "MacBook");
    formData.set("Category", "test");
    formData.set("SubCategory", "MacBook");

    const response = await fetch("http://localhost:5037/products/form", {
        method: "POST",
        // body: new URLSearchParams({ Name: "example", Category: "password", SubCategory: "mac" }),
        body: formData
    });

    console.log("res ", response)

   //  const categories = await getCategories();

    // const product = fromFormData(request, categories);

    // // Validate form fields using Zod
    // const validatedFields = ValidateProduct.safeParse({
    //     name: product.name,
    //     categoryId: product.categoryId,
    // });

    // if (!validatedFields.success) {
    //     return {
    //         errors: validatedFields.error.flatten().fieldErrors,
    //         message: 'Failed to Edit Product.',
    //     };
    // }
    
    // if (product.id) {
    //    await productsService.update(product);
    // } else {
    //    // check for existing product
    //     const res = await productsService.findName(product.name);
    //     if (res.length) {
    //         return {
    //             errors: { name: ['existing name'] },        
    //             message: 'Failed to Edit Product.',
    //         };
    //     }  
    //     await productsService.create(product);
    // } 

   // revalidatePath('/admin');
   // redirect('/admin');
}

export async function getFormData(slug: string) {
    const categories = await fetchWrapper.get('categories');
    const product = await fetchWrapper.get(`products/${slug}`);
    const formDTO = toFormDTO(product, categories);
    return formDTO;
}
