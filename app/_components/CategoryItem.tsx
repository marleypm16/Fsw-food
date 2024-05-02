import React from 'react';
import {Category} from "@prisma/client";
import Image from "next/image";
interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({category}:CategoryItemProps) => {
    return (
        <div className="flex items-center justify-center ">
            <Image src={category.imageUrl} alt={category.name} height={30} width={30}/>
            <span>{category.name}</span>
        </div>
    );
};

export default CategoryItem;