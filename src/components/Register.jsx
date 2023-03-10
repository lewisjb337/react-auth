import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { CreateUser } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await CreateUser(email, password)
      navigate('/account')
    }
    catch (e){
      setError(e.message)
    }
  }

  return (
    <div className='text-center mt-5'>
        <h1>Register</h1>
        <p>
            Already have an account? <Link to='/login'>Login</Link>
        </p>
        <form onSubmit={handleSubmit} className='w-50 m-auto'>
            <div class="form-floating mb-3">
                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
                <button type='submit' className='mt-3 btn btn-primary w-100'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register
