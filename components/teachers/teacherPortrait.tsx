import React from 'react'

const TeacherPortrait = () => {
    return (
        <div
            className={'size-32 border-3 border-gold-muted rounded-full p-3 aspect-square relative flex justify-center items-center'}>
            <div className={'bg-background size-24 rounded-full'}></div>
            <div className={'size-3 border-2 border-white rounded-full bg-green-600 absolute right-5 top-5'}></div>
        </div>
    )
}
export default TeacherPortrait
