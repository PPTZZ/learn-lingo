import React from 'react'
import Image from "next/image";

const TeacherPortrait = ({source}: { source: string }) => {

    return (
        <div
            className={'size-32 border-3 border-gold-muted rounded-full p-3 aspect-square relative flex justify-center items-center'}>

            <div
                className={'size-[12px] border-2 border-white rounded-full bg-green-600 absolute right-5 top-5 '}></div>
            <Image src={source} alt={'teacher avatar'} width={96} height={96} className={'rounded-full aspect-square'}/>
        </div>
    )
}
export default TeacherPortrait
