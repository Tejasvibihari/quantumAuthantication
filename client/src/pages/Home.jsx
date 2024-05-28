import React from 'react'
import DataTable from '../components/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../app/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        dispatch(logOut())
        navigate("/signin")

    }
    return (
        <>
            <div className='py-2 bg-gray-200 flex flex-row'>
                <div className='max-w-7xl mx-auto'>Hello {user.name}</div>
                <div className='max-w-7xl mx-auto cursor-pointer text-red-800' onClick={handleLogout}>Logout</div>
            </div>
            <div className='mt-4'>

                <DataTable />
            </div>
        </>
    )
}
