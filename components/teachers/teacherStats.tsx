import React from 'react'
import {BookOpen, Heart, Star} from 'lucide-react'

const TeacherStats = ({name, lessons, rating, price}: {
    name: string,
    lessons: number,
    rating: number,
    price: number
}) => {
    return (
        <div className={'flex items-start justify-end gap-4 h-14 w-full text-sm'}>
            <div className={'flex flex-col justify-center w-1/3'}>
                <p>Languages</p>
                <p className={'font-semibold text-3xl'}>{name}</p>
            </div>
            <div className={'flex items-start justify-end gap-4 h-14 w-full'}>
                <div className={'flex items-end justify-center gap-2'}>
                    <BookOpen className={'size-4'}/>
                    <p>Lessons online</p>
                </div>
                <div>
                    <p>Lessons done: {lessons}</p>
                </div>
                <div className={'flex items-center justify-center gap-2'}>
                    <Star className={'size-4'}/>
                    <p>Rating: {rating}</p>
                </div>
                <div>
                    <p className={'font-semibold'}>Price/ 1 hour: <span className={'text-green-700'}>${price}</span></p>
                </div>
                <Heart/>
            </div>
        </div>
    )
}
export default TeacherStats
