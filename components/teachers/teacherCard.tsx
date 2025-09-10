'use client'
import React from 'react'
import TeacherPortrait from "@/components/teachers/teacherPortrait";
import TeacherStats from "@/components/teachers/teacherStats";
import TeacherDetails from "@/components/teachers/teacherDetails";
import TeachingLevel from "@/components/teachers/teachingLevel";
import TeacherDescription from "@/components/teachers/teacherDescription";
import MainButton from "@/components/UI/button";
import {TTeachersSchema} from "@/lib/dictionary";

const TeacherCard = ({data}: { data: TTeachersSchema }) => {

    return (
        <div className={'bg-white rounded-2xl p-[24px] grid grid-cols-6 border-gold shadow-lg shadow-gold-muted my-6'}>
            <div className={'col-span-1'}>
                <TeacherPortrait source={data.avatar_url}/>
            </div>
            <div className={'col-span-5'}>
                <TeacherStats name={data.name} lessons={data.lessons_done} rating={data.rating}
                              price={data.price_per_hour}/>
                <TeacherDetails languages={data.languages} info={data.lesson_info} conditions={data.conditions}/>
                <TeacherDescription description={data.experience} comments={data.reviews}/>
                <TeachingLevel teaching_lvl={data.levels}/>
                <MainButton type={'button'} size={'md'} color={'primary'} className={'h-[3.75rem] mt-8'}>Book trial
                    lesson
                </MainButton>
            </div>
        </div>
    )
}
export default TeacherCard
