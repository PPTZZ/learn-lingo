import {model, models, Schema} from "mongoose";

type TReviewerSchema = {
    reviewer_name: string,
    reviewer_rating: number,
    comment: 'string'
}

type TTeachersSchema = {
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

const reviewSchema: Schema<TReviewerSchema> = new Schema({
    reviewer_name: {
        type: String,
        default: 'Anonimous'
    },
    reviewer_rating: {
        type: Number,
        default: 5
    },
    comment: {
        type: String,
    }
})

const teachersSchema: Schema<TTeachersSchema> = new Schema({
    name: {
        type: String,
        default: 'John'
    },
    surname: {
        type: String,
        default: 'Doe'
    },
    languages: {
        type: [String],
        default: []
    },
    levels: {
        type: [String],
        default: []
    },
    rating: {
        type: Number,
        default: 5
    },
    reviews: [reviewSchema],
    price_per_hour: {
        type: Number,
    },
    lessons_done: {
        type: Number
    },
    avatar_url: {
        type: String,
    },
    lesson_info: {
        type: String
    },
    conditions: {
        type: [String],
        default: []
    },
    experience: {
        type: String
    }
})

const Teachers = models.Teacher || model("Teacher", teachersSchema)

export default Teachers