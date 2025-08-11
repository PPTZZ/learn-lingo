import HeroImage from "@/components/heroImage";
import Stats from "@/components/stats";
import TitleCard from "@/components/titleCard";

export default function Home() {

    return (
        <div className="flex flex-col mt-5">
            <div className="flex  gap-6 justify-center">
                <TitleCard/>
                <HeroImage/>
            </div>
            <Stats/>
        </div>
    );
}
