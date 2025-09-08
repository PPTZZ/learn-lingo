'use client'
import React, {useState} from 'react'
import {ChevronDown} from "lucide-react";
import CommentCard from "@/components/comments/commentCard";


const TeacherDescription = () => {

    const [isExpanded, setExpanded] = useState(false)

    return (
        <div className={'my-4'}>
            {!isExpanded ? <p className={'underline cursor-pointer font-black flex gap-2 items-start'}
                              onClick={() => setExpanded(!isExpanded)}>
                read more
                <ChevronDown className={`${isExpanded && "rotate-180"} transition-all duration-200`}/>
            </p> : <p className={'underline cursor-pointer font-black flex gap-2 items-start'}
                      onClick={() => setExpanded(!isExpanded)}>
                read less
                <ChevronDown className={`${isExpanded && "rotate-180"} transition-all duration-200`}/>
            </p>}
            <div className={`transition-all duration-2000 ${!isExpanded ? "h-[0px]" : "h-56"} overflow-y-hidden`}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, assumenda at deleniti
                    doloremque enim facilis, impedit itaque iusto minima minus numquam odio perferendis perspiciatis
                    porro
                    sit tempore veniam vitae! lorem ipsa dolor sit amet.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, assumenda at deleniti
                    doloremque enim facilis, impedit itaque iusto minima minus numquam odio perferendis perspiciatis
                    porro
                    sit tempore veniam vitae! lorem ipsa dolor sit amet.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, assumenda at deleniti
                    doloremque enim facilis, impedit itaque iusto minima minus numquam odio perferendis perspiciatis
                    porro
                    sit tempore veniam vitae! lorem ipsa dolor sit amet.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, assumenda at deleniti
                    doloremque enim facilis, impedit itaque iusto minima minus numquam odio perferendis perspiciatis
                    porro
                    sit tempore veniam vitae! lorem ipsa dolor sit amet.
                </p>
                <CommentCard/>
            </div>
        </div>
    )
}
export default TeacherDescription
