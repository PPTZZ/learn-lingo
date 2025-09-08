import React from 'react'
import Image from "next/image";
import {Star} from 'lucide-react'

const CommentCard = () => {
    return (
        <div>
            <div>
                {/*<Image src={''} alt={'#'} height={100} width={200} className={'size-11'}/>*/}
                <div className={'size-11 bg-gray-200 rounded-full aspect-square'}></div>
                <p>Name</p>
                <p><Star/> 4.5</p>
            </div>
        </div>
    )
}
export default CommentCard
