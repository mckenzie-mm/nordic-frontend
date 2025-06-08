"use client"

import Link from 'next/link';
import Dropdown from '../ui-client/dropdown';
const { NAV, PRODUCTS_NAV_NAME } = require('../templates');
import { ICategoryDTO } from '../DTO/categoryDTO';
import { usePathname } from 'next/navigation';

export default function Menu({ categories } : {
    categories: Array<ICategoryDTO>;
}){
    const pathname = usePathname();

    if (pathname.includes("admin"))
    {
        return <></>;
    }   
    return (
        <ul className="list-products" role="list">
            <Dropdown list={categories} name={PRODUCTS_NAV_NAME} /> 
            {
                NAV.map(({ name, url }: { name: string, url: string }) => <li key={name}><Link href={url}>{name}</Link></li>)
            }
        </ul>
    );
}
