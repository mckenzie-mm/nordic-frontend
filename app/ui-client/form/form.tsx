"use client"
const { ASPECT_RATIO_IMAGE } = require( "@/app/templates");
import { putProduct, postProduct } from "@/app/actions/admin";
import { HREF } from "@/app/aws-images/s3-configuration";
import Link from "next/link";


import { _Object } from "@aws-sdk/client-s3";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

import { ICategoryDTO } from "../../DTO/categoryDTO";
import { ObjectList } from "aws-sdk/clients/s3";
import { getPhotos } from "./getPhotos";
import { IProductDTO } from "@/app/DTO/productDTO";

export default function Form({ productDTO, categoriesDTO }: {
    productDTO: IProductDTO, 
    categoriesDTO: Array<ICategoryDTO>
}) {

    const defThbs = productDTO.smallImage;
    const [photos, setPhotos] = useState<ObjectList>([]);
    const [categoryName, setCategoryName] = useState(productDTO.category); 

    useEffect(() => {
        (async function(){
            const data = await getPhotos(categoryName!);
            setPhotos(data?.slice(1) || []);   
        })();
    }, [categoryName]);


    const albumPhotosKey = encodeURIComponent(categoryName!) + "/"; 

    const handleSelect: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategoryName(e.target.value);  
    }
   
    const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {}

    const handleProduct = productDTO.id ? putProduct.bind(null, productDTO.id) : postProduct;
    
    return (
        <form className="product" action={handleProduct}>          
            <input 
                type="text" 
                name="id" 
                defaultValue={productDTO?.id || -1} 
                hidden
            />
            <section className="section">
                <div className="edit-product-header">
                    <h2 className="edit-product-title">{productDTO.id ? "Edit" : "Create"} Product</h2>   
                    <div className="edit-btn-wrap">
                        <Link href="/admin" className="edit-btn-cancel">Cancel</Link>
                        <button className="edit-btn-save" type="submit">Save</button>
                    </div>   
                </div> 
            </section>
            
            <section className="section">
                <div className="edit-product-grid">
                    <div>
                        <div className="edit-product-image-header">
                            <h2 className="edit-product-image-header-title">Images:</h2>
                            <select  name="category" value={categoryName} onChange={handleSelect}  style={{marginBottom: "10px", padding: "5px"}}>
                            {
                                categoriesDTO.map(({ name }) => {
                                    return  <option key={name} value={name}>
                                            {name}
                                            </option>
                                })
                            }
                            </select>
                        </div>   
                        <div className="bucket-image-widget-container" >
                            <ul className="bucket-image-widget-list" role="list">
                            {
                                photos.map((photo) => {   
                                    const photoKey = photo.Key;                         
                                    const photoUrl = HREF + encodeURIComponent(photoKey!);  
                                    const name = photoKey!.replace(albumPhotosKey, "");                  
                                    return (
                                        <li key={photoKey} className="bucket-image-widget-li">
                                            <div className="bucket-image-widget-img-wrap" >
                                                <label >
                                                    <input 
                                                        type="checkbox" 
                                                        id={photoKey} 
                                                        value={name} 
                                                        name={"SmallImage"} 
                                                        onChange={handleSelectImage}
                                                        defaultChecked={productDTO.smallImage!.includes(name)}
                                                    />
                                                    <img 
                                                        src={photoUrl} 
                                                        className="bucket-image-widget-img"
                                                        alt="form image"
                                                        style={{border: "1px solid #bbb", aspectRatio: ASPECT_RATIO_IMAGE}}
                                                    />
                                                </label>
                                            </div>
                                        </li>);
                                    }
                                )
                            }
                            </ul>
                        </div>
                    </div>
                    
                    <div className="edit-product-details">
                       
                        <label htmlFor="name" className="edit-form-label">Product Name:</label>
                        <input 
                            type="text" 
                            id="edit-form-name" 
                            name="name" 
                            defaultValue={productDTO.name} 
                            className="edit-form-name"
                        />
                      
                        <br/>
                        <label htmlFor="description" className="edit-form-label">Description:</label>
                        <textarea 
                            id="description" 
                            name="description" 
                            className="edit-form-description"
                            defaultValue={productDTO.description}
                        />
                         <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div>
                                <label htmlFor="Price" className="edit-form-label">Price $:</label>
                                <input 
                                    className="edit-form-price"
                                    type="number" 
                                    id="price" 
                                    defaultValue={(productDTO.price/100).toFixed(2)} 
                                    name="Price" 
                                    min="1" 
                                    step=".01"
                                />
                            </div>
                            <div>
                                <label htmlFor="availability" className="edit-form-label">Stock Quantity:</label>
                                <input 
                                    id="availability"
                                    name="availability"
                                    type="number" 
                                    className="edit-form-availability" 
                                    defaultValue={productDTO.availability}
                                /> 
                            </div>     
                        </div>
                        <label htmlFor="price" className="edit-form-label">Select Default Image:</label>
                    </div>
                </div>
            </section>
        </form>

    );
  }

  