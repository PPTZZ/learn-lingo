'use client'
import React from 'react'
import {useSearchParams} from "next/navigation";

const TeachingLevel = () => {

    const params = useSearchParams()
    const level = params.get('lvl')
    console.log(level)

    return (
        <div className={'flex items-center gap-2'}>
            <div
                className={`${level === 'bgn' ? 'bg-gold rounded-full px-3.5 py-2' : 'border border-gray-200 rounded-full px-3.5 py-2'}`}>
                <p>#A1 Beginner</p>
            </div>
            <div
                className={`${level === 'ele' ? 'bg-gold rounded-full px-3.5 py-2' : 'border border-gray-200 rounded-full px-3.5 py-2'}`}>
                <p>#A2 Elementary</p>
            </div>
            <div
                className={`${level === 'int' ? 'bg-gold rounded-full px-3.5 py-2' : 'border border-gray-200 rounded-full px-3.5 py-2'}`}>
                <p>#B1 Intermediate</p>
            </div>
            <div
                className={`${level === 'u-int' ? 'bg-gold rounded-full px-3.5 py-2' : 'border border-gray-200 rounded-full px-3.5 py-2'}`}>
                <p>#B2 Upper-Intermediate</p>
            </div>
        </div>
    )
}
export default TeachingLevel
