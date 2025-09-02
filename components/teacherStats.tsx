import React from 'react'
import {BookOpen, Heart, Star} from 'lucide-react'

const TeacherStats = () => {
    return (
        <div className={'flex items-start justify-end gap-4 h-14 w-full bg-red-200 text-sm'}>
            <div className={'flex flex-col justify-center w-1/3'}>
                <p>Languages</p>
                <p className={'font-semibold text-3xl'}>Jane Smith</p>
            </div>
            <div className={'flex items-start justify-center gap-4 h-14 w-full bg-red-200'}>
                <div className={'flex items-end justify-center gap-2'}>
                    <BookOpen className={'size-4'}/>
                    <p>Lessons online</p>
                </div>
                <div>
                    <p>Lessons done: 65434</p>
                </div>
                <div className={'flex items-center justify-center gap-2'}>
                    <Star className={'size-4'}/>
                    <p>Rating:5.1</p>
                </div>
                <Heart/>
            </div>
        </div>
    )
}
export default TeacherStats
