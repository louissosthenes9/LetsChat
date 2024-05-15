import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className='min-w-96 mx-auto flex flex-col items-center justify-center'>
      
       {/* Adding a glass morphic effect  */}
       <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
          <h1 className='text-3xl font-semibold text-center'>Login <span className='text-blue-500'>LetChat</span></h1>
            <form action="" method="post">
               <div>
                <label className='label  p-2'>
                    <span className="text-base label-text">
                      username
                    </span>
                </label>
                    <input type="text" placeholder='Enter username' className="w-full input input-bordered h-10"/>
               </div>
               <div>
                <label className='label  p-2'>
                    <span className="text-base label-text">
                      password
                    </span>
                </label>
                    <input type="password" placeholder='password' className="w-full input input-bordered h-10"/>
               </div>

                <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block-'>
                    {"Don't have an account with this email address?"}
                </Link>
                <div className="btn btn-block btn-sm mt-2 bg-blue-950 text-white">
                    Login
                </div>
            </form>
       </div>
   </div>
  )
}
