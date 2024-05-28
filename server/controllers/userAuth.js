import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
const saltRound = 10


export const signUp = async (req, res) => {
    const { name, email, birthDate, password } = req.body
    try {

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, saltRound)
        const newUser = new User({
            name,
            email,
            birthDate,
            password: hashedPassword
        })
        await newUser.save()
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.status(200).json({ token, user })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}