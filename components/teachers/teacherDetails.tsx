'use client'
import React from 'react'
import TeacherDescription from "@/components/teachers/teacherDescription";


const TeacherDetails = () => {

    return (
        <div>
            <p>
                Speaks: soaidhngs alidsgfna
            </p>
            <p>
                Lessons Info: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad enim nesciunt non! Ad alias,
                aliquam amet debitis dolorum ea esse ipsa neque perspiciatis quod, repellendus veritatis vero
                voluptates! In, recusandae.
            </p>
            <p>Condiitons: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, deleniti, dolore dolores
                fuga fugit id illo ipsum minus mollitia omnis provident ratione repellendus sunt! Aperiam consequatur
                deserunt earum enim recusandae.
            </p>
            <TeacherDescription/>
            <div className="h-6 w-20 bg-red-800"></div>
        </div>
    )
}
export default TeacherDetails
