import React from 'react';
import Header from "@/app/_components/Header";
import SearchInput from "@/app/_components/SearchInput";
import CategoryList from "@/app/_components/CategoryList";

const Home = () => {
    return (
        <>
            <div className="px-5 py-6">
                <Header/>
            </div>
            <div className="px-5">
                <SearchInput/>

            </div>
            <div className="px-5">
                <CategoryList/>

            </div>
        </>
    );
};

export default Home;

