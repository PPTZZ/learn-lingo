import React from "react";

const Stats = () => {
    return (
        <div
            className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center outline-2 outline-dashed outline-gold-muted rounded-3xl lg:px-28 space-y-6 md:gap-12 lg:gap-[6.25rem] lg:h-28 mt-6 ">
            <div className="flex gap-4">
                <p className="text-3xl font-semibold">32,000+</p>
                <p className="text-sm">
                    Experienced
                    <br/>
                    tutors
                </p>
            </div>
            <div className="flex gap-4">
                <p className="text-3xl font-semibold">300,000+</p>
                <p className="text-sm">
                    5-star tutor
                    <br/>
                    reviews
                </p>
            </div>
            <div className="flex gap-4">
                <p className="text-3xl font-semibold">120+</p>
                <p className="text-sm">
                    Subjects
                    <br/>
                    taught
                </p>
            </div>
            <div className="flex gap-4">
                <p className="text-3xl font-semibold">200+</p>
                <p className="text-sm">
                    Tutor
                    <br/>
                    nationalities
                </p>
            </div>
        </div>
    );
};

export default Stats;
