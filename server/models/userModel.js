import mongoose from 'mongoose'
import { type } from 'os'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User', userSchema)
export default User;