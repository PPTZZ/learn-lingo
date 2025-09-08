'use client'
import React from 'react'
import TeacherPortrait from "@/components/teachers/teacherPortrait";
import TeacherStats from "@/components/teachers/teacherStats";
import TeacherDetails from "@/components/teachers/teacherDetails";
import TeachingLevel from "@/components/teachers/teachingLevel";
import TeacherDescription from "@/components/teachers/teacherDescription";

const TeacherCard = () => {
    return (
        <div className={'bg-white rounded-2xl p-[24px] grid grid-cols-6'}>
            <div className={'col-span-1'}>
                <TeacherPortrait/>
            </div>
            <div className={'col-span-5'}>
                <TeacherStats/>
                <TeacherDetails/>
                <TeacherDescription/>
                <TeachingLevel/>
            </div>
        </div>
    )
}
export default TeacherCard
