import React from 'react'
import GenderCheckBox from './GenderCheckBox'

export default function SignUp() {
  return (
    <div className='min-w-96 mx-auto flex flex-col items-center justify-center'>

      {/* Adding a glass morphic effect  */}
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className='text-3xl font-semibold text-center'><span className='text-white'>Login</span> <span className='text-blue-500'>LetChat</span></h1>
        <form action="" method="post" className='text-white'>
          <div>
            {/* FullName field */}
            <label className='label  p-2'>
              <span className="text-base label-text">
              Full Name 
              </span>
            </label>
            <input type="text" placeholder='Enter username' className="w-full input input-bordered h-10 text-black" />
          </div>

          {/* Email field */}
          <div>
            <label className='label  p-2'>
              <span className="text-base label-text">
                Email
              </span>
            </label>

            <input type="email" placeholder='you@gmail.com' className="w-full input input-bordered h-10 text-black" />
          </div>

          {/* password field */}
          <div>
            <label className='label  p-2'>
              <span className="text-base label-text">
                password
              </span>
            </label>

            <input type="password" placeholder='Confirm password' className="w-full input input-bordered h-10 text-black" />
          </div>

          {/* confirm password field */}
          <div>
            <label className='label  p-2'>
              <span className="text-base label-text">
                Confirm password
              </span>
            </label>

            <input type="password" placeholder='password' className="w-full input input-bordered h-10 text-black" />
          </div>
           
          {/* gender checkbox */}
          <GenderCheckBox/>

          <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block-'>
            {"You have an account with this email address?login here"}
          </a>
          <div className="btn btn-block btn-sm mt-2 bg-blue-950 text-white">
            Sign Up
          </div>
        </form>
      </div>
    </div>
  )
}
