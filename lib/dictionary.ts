export type TReviewerSchema = {
    reviewer_name: string,
    reviewer_rating: number,
    comment: 'string'
}

export type TTeachersSchema = {
    _id?: string,
    name: string,
    surname: string,
    languages: string[],
    levels: string[],
    rating: number,
    reviews: TReviewerSchema[],
    price_per_hour: number,
    lessons_done: number,
    avatar_url: string,
    lesson_info: string,
    conditions: string[],
    experience: string,
}
