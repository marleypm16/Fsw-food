import React from 'react';
import Header from "@/app/_components/Header";
import SearchInput from "@/app/_components/SearchInput";

const Home = () => {
    return (
        <>
            <div className="px-5 py-6">
                <Header/>
            </div>
            <div className="px-5">
                <SearchInput/>

            </div>



        </>
    );
};

export default Home;

