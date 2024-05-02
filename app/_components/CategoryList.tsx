import React from 'react';
import {db} from "@/app/_lib/prisma";
import CategoryItem from "@/app/_components/CategoryItem";
const CategoryList = async () => {
    const categories = await db.category.findMany();
    return (
            <div className="flex gap-3">
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category}/>
                ))}
            </div>

    );
};

export default CategoryList;