
import { getForm } from "@/app/actions/admin";
import { getCategories } from "@/app/actions/categories";
import { IFormDTO } from "@/app/DTO/formDTO";
import Form from "@/app/ui-client/form/form";
import { _Object } from "@aws-sdk/client-s3";

export default async function Page({ params, }: {params: Promise<{ productSlug: string }>}) {
    const { productSlug } = await params;

    let formDTO: IFormDTO = {
        name: "",
        price: 100, 
        category: "bracelets",
        description: "",
        images: [],
        availability: 1,
        categories: []
    }

    let categoriesDTO;

    if (productSlug) {
        formDTO = await getForm(productSlug);
    } else {
        categoriesDTO = await getCategories();
        formDTO.categories = categoriesDTO;
    }

    return <Form formDTO={formDTO} />

  }

  