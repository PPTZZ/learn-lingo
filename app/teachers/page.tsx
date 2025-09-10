import React from 'react'
import {TTeachersSchema} from "@/lib/dictionary";
import TeacherCard from "@/components/teachers/teacherCard";

const Teachers = async () => {

    const data = await fetch('http://localhost:3000/api/teachers');
    const teachers = await data.json();


    return (
        <div className={'px-32 h-[calc(100vh-4.5rem)] overflow-y-auto  mx-auto'}>
            {teachers.map((teacher: TTeachersSchema) => {
                return (
                    <TeacherCard key={teacher._id} data={teacher}/>
                )
            })}
        </div>
    )
}

export default Teachers