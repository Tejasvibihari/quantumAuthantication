import React from 'react'
import { useState, useEffect } from 'react'
import client from '../service/axiosClient'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../app/userSlice/userSlice'

export default function SignInForm() {
    const authenticated = useSelector(state => state.user.isAuthenticated)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            dispatch(signInStart())
            const response = await client.post("/api/auth/signin", formData)
            console.log(response.data)
            dispatch(signInSuccess(response.data))
            navigate("/")
        } catch (error) {
            console.log(error)
            dispatch(signInFailure())
            if (error.response && error.response.data && error.response.data.message) {
                alert(`Signin failed: ${error.response.data.message}`)
            } else if (error.message) {
                alert(`Signin failed: ${error.message}`)
            } else {
                alert('Signin failed: An unknown error occurred')
            }
        }
    }
    useEffect(() => {
        setFormData({
            email: email,
            password: password
        })
        { authenticated ? navigate("/") : null }
    }, [email, password])

    return (
        <>
            <div className='signup'>
                <div className='p-2 mx-auto'>
                    <div className='flex flex-col max-w-lg mx-auto my-auto p-2 border rounded-lg'>
                        <div className='mx-auto my-2'>
                            <div className='text-center mb-4 font-sans font-bold text-xl'>
                                SignIn
                            </div>
                            <div>
                                <img src='./img/avatar.jpg' className='rounded-full w-20' />
                            </div>
                        </div>
                        <form>

                            <div>
                                <label className='mt-2'>Email</label>
                                <input className='w-full p-2 rounded-lg' type='email' required name="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <label className='mt-2'>Password</label>
                                <input className='w-full p-2 rounded-lg' type='password' required name="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='mt-4'>
                                <button className='p-3 border-black border-[1px] rounded-sm w-full hover:bg-gray-600 hover:border-gray-600 hover:text-white' type='submit' onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className='text-center mt-4'>
                        Not have an <Link className='text-blue-500' to="/signup" >Register</Link>
                    </div>
                </div>
            </div >
        </>
    )
}