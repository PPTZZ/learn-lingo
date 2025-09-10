'use client'
import React from 'react'


const TeacherDetails = ({languages, info, conditions}: { languages: string[], info: string, conditions: string[] }) => {

    return (
        <div>
            <p>
                <span className={'font-semibold'}>Speaks:</span> {languages.join(', ')}
            </p>
            <p>
                <span className={'font-semibold'}>Lessons Info:</span> {info}
            </p>
            <p>
                <span className={'font-semibold'}>Conditions:</span> {conditions.join(' ')}
            </p>
        </div>
    )
}
export default TeacherDetails
