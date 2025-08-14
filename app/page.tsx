import React from 'react'
import HeroImage from "@/components/heroImage";
import Stats from "@/components/stats";
import TitleCard from "@/components/titleCard";
import Modal from "@/components/UI/modal";


const HomePage = () => {
    return (
        <div className="flex flex-col mt-5">
            <div className="flex  gap-6 justify-center">
                <TitleCard/>
                <HeroImage/>
            </div>
            <Stats/>
            <Modal ac={'login'}> <h1>login modal</h1></Modal>
            <Modal ac={'register'}> <h1>register modal</h1></Modal>
        </div>

    );
}
export default HomePage
