
import { getForm } from "@/app/actions/admin";
import { getCategories } from "@/app/actions/categories";
import { IProductDTO } from "@/app/DTO/productDTO";
import Form from "@/app/ui-client/form/form";
import { _Object } from "@aws-sdk/client-s3";

export default async function Page({ params, }: {params: Promise<{ productSlug: string }>}) {
    const { productSlug } = await params;

    let productDTO: IProductDTO = {
        name: "",
        price: 1, 
        category: "bracelets",
        description: "",
        smallImage: [],
        mediumImage: [],
        largeImage: [],
        availability: 1
    }

    let categoriesDTO;

    if (productSlug) {
        const data = await getForm(productSlug);
        productDTO = {
            id: data.id,
            name: data.name,
            category: data.category,
            price: data.price, 
            description: data.description,
            smallImage: data.smallImage,
            mediumImage: data.smallImage,
            largeImage: data.smallImage,
            availability: data.availability

        };
        categoriesDTO = data.categories;
    } else {
        categoriesDTO = await getCategories();
    }

    return <Form productDTO={productDTO} categoriesDTO={categoriesDTO} />

  }

  