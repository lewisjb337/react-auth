import React from 'react'
import {useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const { currentUser, logout } = UserAuth()
  const navigate = useNavigate()

    const handleLogout = async () => {
        try{
            await logout()
            navigate('/login')
        }
        catch(e){
            console.log(e.message)
        }
    }

  return (
    <div className='m-auto pt-5'>
      <p>User Email: {currentUser && currentUser.email}</p>
      <button onClick={handleLogout} type='submit'>Logout</button>
    </div>
  )
}

export default Account
