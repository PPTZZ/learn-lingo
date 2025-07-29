import React from "react";
import { links } from "@/lib/links";
import Link from "next/link";
import { LogIn } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-white">
      <div className="flex gap-2 items-center">
        <div className="size-7 aspect-square rounded-full bg-gold" />
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
        <p className="flex gap-1 font-semibold">
          <LogIn className="stroke-gold" />
          Login
        </p>
        <button>Registration</button>
      </div>
    </div>
  );
};

export default Header;
