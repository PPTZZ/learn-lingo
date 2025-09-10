'use client'
import React from "react";
import {links} from "@/lib/links";
import Link from "next/link";
import {LogIn} from "lucide-react";
import {useRouter} from "next/navigation";
import MainButton from "@/components/UI/button";


const Header = () => {
    const navigate = useRouter()


    const openRegister = () => {
        navigate.push('/?ac=register')
    }


    return (

            <nav className="flex justify-around items-center p-4 w-full bg-white">
                <div className="flex gap-2 items-center">
                    <div className="size-7 aspect-square rounded-full bg-gold"/>
                    <p className="text-xl font-semibold">LearnLingo</p>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            href={link.url}
                            className="hover:text-gold font-semibold"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="flex gap-4 items-center">
                    <Link href={'/?ac=login'} className="flex gap-1 font-semibold">
                        <LogIn className="stroke-gold"/>
                        Login
                    </Link>
                    <MainButton color={'register'} size={'register'} className={''}
                                onClick={openRegister}>Registration</MainButton>
                </div>
            </nav>

    );
};

export default Header;
