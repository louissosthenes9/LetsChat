import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }


  return (
    <div className='min-w-96 mx-auto flex flex-col items-center justify-center'>

      {/* Adding a glass morphic effect  */}
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className='text-3xl font-semibold text-center'>Login <span className='text-blue-500'>LetChat</span></h1>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div>
            <label className='label  p-2'>
              <span className="text-base label-text">
                username
              </span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value) }}
              placeholder='Enter username'
              className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className='label  p-2'>
              <span className="text-base label-text">
                password
              </span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              className="w-full input input-bordered h-10" />
          </div>

          <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block-'>
            {"Don't have an account with this email address?"}
          </Link>
          <div>
            <button 
           
            className='btn btn-block btn-sm mt-2 border border-slate-700 bg-blue-950 text-white' 
            disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
