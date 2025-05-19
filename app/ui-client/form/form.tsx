"use client"
const { ASPECT_RATIO_IMAGE } = require( "@/app/templates");
import { handleProduct } from "@/app/actions/admin";
import { HREF } from "@/app/aws-images/s3-configuration";
import Link from "next/link";


import { _Object } from "@aws-sdk/client-s3";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

import { ICategoryDTO } from "../../DTO/categoryDTO";
import { ObjectList } from "aws-sdk/clients/s3";
import { getPhotos } from "./getPhotos";
import { IProductDTO } from "@/app/DTO/productDTO";

export default function Form({ productDTO, edit, categoriesDTO }: {
    productDTO: IProductDTO, 
    categoriesDTO: Array<ICategoryDTO>,
    edit: boolean
}) {

    const defThbs = productDTO.smallImage;
    const [photos, setPhotos] = useState<ObjectList>([]);
    const [categoryName, setCategoryName] = useState(productDTO.category); 
    const [thumbs, setThumbs] = useState<Array<string>>(defThbs);
    const [selected, setSelected] = useState(0);
    const [len, setLen] = useState(defThbs.length);

    const handleSelectThb = (index: number) => setSelected(index);

    useEffect(() => {
        (async function(){
            const data = await getPhotos(categoryName);
            setPhotos(data?.slice(1) || []);   
        })();
    }, [categoryName]);

    useEffect(() => {}, [thumbs.length]);

    const albumPhotosKey = encodeURIComponent(categoryName) + "/"; 

    const handleSelect: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategoryName(e.target.value);  
        if (e.target.value === productDTO.category) {
            setThumbs(productDTO.smallImage);        
        } else {
           setThumbs([])
        }
      }
   
    const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const img = e.target.value;
        const index = thumbs.indexOf(img);
        (index > -1) ? thumbs.splice(index, 1) : thumbs.push(img);
        setThumbs(thumbs);
        setLen(thumbs.length); // required for react to trigger update
    }
    
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
                    <h2 className="edit-product-title">{edit ? "Edit" : "Create"} Product</h2>   
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
                        <ul className="form-thumbnail-list" role="list">
                        {
                            thumbs.map((thumb, index) => {
                                // const src = IMAGE_PREFIX + encodeURIComponent(thumb); 
                                const src = HREF + categoryName + "/" + encodeURIComponent(thumb); 
                                return ( 
                                <li key={index} className={`thumbnail ${(index === selected) ? "form-thumbnail-selected" : ""}`} >
                                    <label className="thb-select">
                                        <input 
                                            type="radio" 
                                            name="defaultImage" 
                                            value={thumb}
                                            checked={index === selected} 
                                            onChange={() => handleSelectThb(index)} 
                                            hidden
                                        />
                                        <img 
                                            src={src} 
                                            className="thumbnail-img"
                                            alt="thumbnail image"
                                        />
                                    </label>
                                </li>)
                            })    
                        } 
                        </ul>
                    </div>
                </div>
            </section>
        </form>

    );
  }

  