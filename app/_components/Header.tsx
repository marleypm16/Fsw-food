import React from 'react';
import Image from "next/image";
import {Button} from "@/app/_components/ui/button";
import {MenuIcon} from "lucide-react";

const Header = () => {
    return (
        <div className="flex justify-between">
            <Image src="/logo.svg" alt="Fsw Food Logo" width={120} height={120}/>
            <Button size="icon" className="bg-transparent text-red-500">
                <MenuIcon/>
            </Button>
        </div>
    );
};

export default Header;