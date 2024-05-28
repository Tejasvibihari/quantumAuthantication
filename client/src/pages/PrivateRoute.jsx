// import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const authenticated = useSelector((state => state.user.isAuthenticated));

    return (
        authenticated ? <Outlet /> : <Navigate to="/signin" />
    )
}