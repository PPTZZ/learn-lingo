import {model, models, Schema} from "mongoose";
import {TReviewerSchema, TTeachersSchema} from "@/lib/dictionary";


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