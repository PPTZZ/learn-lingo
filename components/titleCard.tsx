'use client'
import React from "react";
import MainButton from "@/components/UI/button";

const TitleCard = () => {
    return (
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
            <MainButton color={'primary'} size={'md'} className={'mt-16'}>get started</MainButton>
        </div>
    );
};

export default TitleCard;
