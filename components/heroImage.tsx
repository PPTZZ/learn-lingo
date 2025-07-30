import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className="size-[550px] bg-gold-muted rounded-3xl relative hidden lg:block">
      <Image
        className="absolute bottom-19 left-1/2 -translate-x-1/2"
        src={"/68e4226188648a055ee1b42bed644f46-sticker 1.png"}
        alt="Hero Image"
        width={339}
        height={339}
      />
      <div className="w-64 h-36 bg-linear-to-b from-[#EEB055] to-[#D08F38] absolute bottom-0 left-1/2 -translate-x-1/2 rounded flex justify-center items-center">
        <svg className="size-12 fill-white/40">
          <use href="/apple_logo.svg#appleLogo"></use>
        </svg>
      </div>
    </div>
  );
};

export default HeroImage;
