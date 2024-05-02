import React from 'react';
import {Input} from "@/app/_components/ui/input";
import {Button} from "@/app/_components/ui/button";
import Image from "next/image";

const SearchInput = () => {
    return (
        <div className="flex gap-4">
            <Input placeholder="Buscar Restaurantes"></Input>
            <Button>
                <Image src="/Search.svg" alt="Pesquisar" width={20} height={20}/>
            </Button>
        </div>
    );
};

export default SearchInput;