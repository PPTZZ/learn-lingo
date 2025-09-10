import React from 'react'
import {Star} from 'lucide-react'

const CommentCard = ({reviewer, comment, rating}: { reviewer: string, comment: string, rating: number }) => {
    return (
        <div className={'my-6'}>
            <div className={'flex gap-2'}>
                {/*<Image src={''} alt={'#'} height={100} width={200} className={'size-11'}/>*/}
                <div className={'size-11 bg-gray-200 rounded-full aspect-square'}></div>
                <div>
                    <p>{reviewer}</p>
                    <p className={'flex font-semibold items-center gap-2'}><Star
                        className={'fill-gold stroke-gold'}/> {rating}</p>
                </div>
            </div>
            <p>{comment}</p>
        </div>
    )
}
export default CommentCard
