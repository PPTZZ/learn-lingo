'use client'
import React, {useState} from 'react'
import {ChevronDown} from "lucide-react";
import CommentCard from "@/components/comments/commentCard";
import {TReviewerSchema} from "@/lib/dictionary";


const TeacherDescription = ({description, comments}: { description: string, comments: TReviewerSchema[] }) => {

    const [isExpanded, setExpanded] = useState(false);
    return (
        <div className={'my-4'}>
            <div
                className={`transition-all duration-700 overflow-hidden ${
                    isExpanded ? "max-h-[500px]" : "max-h-0"
                }`}
            >
                <p>
                    {description}
                </p>
                {comments.map((comment, i) => <CommentCard key={i} reviewer={comment.reviewer_name}
                                                           rating={comment.reviewer_rating}
                                                           comment={comment.comment}/>)}

            </div>
            <button
                onClick={() => setExpanded(!isExpanded)}
                className="underline font-black flex gap-2 items-center cursor-pointer"
            >
                {isExpanded ? "read less" : "read more"}
                <ChevronDown
                    className={`${isExpanded ? "rotate-180" : ""} transition-transform duration-200`}
                />
            </button>
        </div>
    )
}
export default TeacherDescription
