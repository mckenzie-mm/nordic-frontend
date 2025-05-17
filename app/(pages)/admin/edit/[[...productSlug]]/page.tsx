
import { getFormData } from "@/app/actions/form-actions";
import Form from "@/app/ui-client/form/form";
import { _Object } from "@aws-sdk/client-s3";

export default async function Page({ params, }: {params: Promise<{ productSlug: string }>}) {
    const { productSlug } = await params;
    const {
        productDTO,
        categoriesDTO
    } = await getFormData(productSlug);
    
    let edit = false;
    if (productSlug) {
        edit = true;
    }

    return <Form productDTO={productDTO} categoriesDTO={categoriesDTO} edit={edit}/>

  }

  