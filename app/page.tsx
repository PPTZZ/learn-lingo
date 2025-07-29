import Image from "next/image";
import apple_logo from "@/public/apple_logo.svg";

export default function Home() {
  return (
    <div className="max-w-screen-limiter mx-auto flex justify-center gap-6 mt-5">
      <div className="bg-background md:w-main-page-cta px-16 py-24 rounded-3xl">
        <h1 className="text-5xl font-semibold leading-18">
          Unlock your potential with the best{" "}
          <span className="italic font-medium bg-gold/55 rounded-xl">
            language
          </span>{" "}
          tutors
        </h1>
        <p className="mt-8 w-[29.438rem]">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button className="mt-16 bg-gold rounded-xl px-10 py-2 font-semibold ">
          get started
        </button>
      </div>
      <div className="size-[530px] bg-gold-muted rounded-3xl relative">
        <Image
          src={"/68e4226188648a055ee1b42bed644f46-sticker 1.png"}
          alt="Hero Image"
          width={339}
          height={339}
        />
        <div className="w-64 h-36 bg-linear-to-b from-[#EEB055] to-[#D08F38] absolute bottom-0 left-1/2 -translate-x-1/2 rounded flex justify-center items-center">
          <Image
            src={apple_logo}
            alt="Apple Logo"
            width={100}
            height={100}
            className="size-10 stroke-white fill-white"
          />
        </div>
      </div>
    </div>
  );
}
