'use client'
import React from 'react'
import UserPortrait from "@/components/userPortrait";
import TeacherStats from "@/components/teacherStats";

const TeacherCard = () => {
    return (
        <div className={'bg-white rounded-2xl p-[24px] grid grid-cols-6'}>
            <div className={'col-span-1'}>
                <UserPortrait/>
            </div>
            <div className={'col-span-5'}>
                <TeacherStats/>
            </div>
        </div>
    )
}
export default TeacherCard
