import React from 'react'
import TeacherCard from "@/components/teachers/teacherCard";

const Teachers = () => {
    return (
        <div className={'px-32 bg-background h-[calc(100vh-4.5rem)] overflow-y-auto'}>
            <TeacherCard/>
        </div>
    )
}

export default Teachers