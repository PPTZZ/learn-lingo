'use client'
import React from 'react'
import {useSearchParams} from "next/navigation";


const TeachingLevel = ({teaching_lvl}: { teaching_lvl: string[] }) => {

    const params = useSearchParams()
    const level = params.get('lvl')

    return (
        <div className={'flex items-center gap-2 font-semibold w-full overflow-x-scroll'}>
            {teaching_lvl.map((item, i) => <div
                className={`${level === item ? 'bg-gold rounded-full px-3.5 py-2' : 'border border-gray-200 rounded-full px-3.5 py-2'} min-w-fit`}
                key={i}>
                <p># {item}</p>
            </div>)}

        </div>
    )
}
export default TeachingLevel
