import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    img: {
        type: String
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedChannels: {
        type: [String]
    },
    fromGoogle:{
        type:Boolean,
        default:false
    }

}, { timestamps: true })

export default model("user", UserSchema)
