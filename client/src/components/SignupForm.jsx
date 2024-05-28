import React from 'react'
import { useState, useEffect } from 'react'
import client from '../service/axiosClient'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signUpFailure, signUpStart, signUpSuccess } from '../app/userSlice/userSlice'

export default function SignupForm() {
    const loading = useSelector(state => state.user.loading)
    const authenticated = useSelector(state => state.user.isAuthenticated)

    console.log(loading)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [password, setPassword] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        birthDate: "",
        password: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            dispatch(signUpStart())
            const response = await client.post("/api/auth/signup", formData)
            console.log(response.data.message)
            dispatch(signUpSuccess(response.data.message))
            alert(response.data.message)
            navigate('/signin')
        } catch (error) {
            console.log(error)
            dispatch(signUpFailure())
            if (error.response && error.response.data && error.response.data.message) {
                alert(`Signup failed: ${error.response.data.message}`)
            } else if (error.message) {
                alert(`Signup failed: ${error.message}`)
            } else {
                alert('Signup failed: An unknown error occurred')
            }

        }
    }
    useEffect(() => {
        setFormData({
            name: name,
            email: email,
            birthDate: birthDate,
            password: password
        })
        { authenticated ? navigate("/") : null }
    }, [name, email, birthDate, password, authenticated, navigate])

    return (
        <>

            <div className='signup pt-20'>
                <div className='p-2 mx-auto glass'>
                    <div className='flex flex-col max-w-lg mx-auto my-auto p-2 border rounded-lg'>
                        <div className='mx-auto my-2'>
                            <div className='text-center mb-4 font-sans font-bold text-xl'>
                                SignUp
                            </div>
                            <div>
                                <img src='./img/avatar.jpg' className='rounded-full w-20' />
                            </div>
                        </div>
                        <form>
                            <div>
                                <label className='mt-2'>Name</label>
                                <input className='w-full p-2 rounded-lg' type='text' required name="name" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label className='mt-2'>Email</label>
                                <input className='w-full p-2 rounded-lg' type='email' required name="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label className='mt-2'>Date of Birth</label>
                                <input className='w-full p-2 rounded-lg' type='date' required name="BirthDate" value={birthDate} placeholder='Date of Birth' onChange={(e) => setBirthDate(e.target.value)} />
                            </div>
                            <div>
                                <label className='mt-2'>Password</label>
                                <input className='w-full p-2 rounded-lg' type='password' required name="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='mt-4'>
                                <button className='p-3 border-black border-[1px] rounded-sm w-full hover:bg-gray-600 hover:border-gray-600 hover:text-white' type='submit' onClick={handleSubmit}>
                                    {loading ? "Loading..." : "Register"}
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className='text-center mt-4'>
                        Already Have an Account <Link className='text-blue-500' to="/signin" >Login</Link>
                    </div>
                </div>
            </div >
        </>
    )
}