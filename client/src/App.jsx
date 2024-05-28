import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupForm from './components/SignupForm'
import SignInForm from './components/SignInForm'
import Home from './pages/Home'
import PrivateRoute from './pages/PrivateRoute'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
