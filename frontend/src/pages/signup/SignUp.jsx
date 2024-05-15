import { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBox from './GenderCheckBox'

export default function SignUp() {

  const [input, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const handleGenderCheckBox = (gender) => {
    setInput({...input,gender
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className='min-w-96 mx-auto flex flex-col items-center justify-center'>

      {/* Adding a glass morphic effect */}
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className='text-3xl font-semibold text-center'><span className='text-white'>Login</span> <span className='text-blue-500'>LetChat</span></h1>
        <form onSubmit={handleSubmit} method="post" className='text-white'>
          <div>
            {/* FullName field */}
            <label className='label p-2'>
              <span className="text-base label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder='Enter fullName'
              value={input.fullName}
              onChange={(e) => {
                setInput({ ...input, fullName: e.target.value })
              }}
              className="w-full input input-bordered h-10 text-black" />
          </div>

          <div>
            {/* Email field */}
            <label className='label p-2'>
              <span className="text-base label-text">
                Email
              </span>
            </label>

            <input
              type="email"
              value={input.username}
              onChange={(e) => {
                setInput({ ...input, username: e.target.value })
              }}
              placeholder='you@gmail.com'
              className="w-full input input-bordered h-10 text-black" />
          </div>

          <div>
            {/* password field */}
            <label className='label p-2'>
              <span className="text-base label-text">
                password
              </span>
            </label>

            <input
              type="password"
              placeholder='Confirm password'
              value={input.password}
              onChange={(e) => {
                setInput({ ...input, password: e.target.value })
              }}
              className="w-full input input-bordered h-10 text-black" />
          </div>

          <div>
            {/* confirm password field */}
            <label className='label p-2'>
              <span className="text-base label-text">
                Confirm password
              </span>
            </label>

            <input
              type="password"
              placeholder='Confirm password'  // Change placeholder text to match label
              value={input.confirmPassword}
              onChange={(e) => {
                setInput({ ...input, confirmPassword: e.target.value })
              }}
              className="w-full input input-bordered h-10 text-black" />
          </div>


          {/* gender checkbox */}
          <GenderCheckBox  onGenderCheckboxChange={handleGenderCheckBox} selectedGender={input.gender}/>

          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block-'>
            {"You have an account with this email address?login here"}
          </Link>
          <button type={"submit"} className="btn btn-block btn-sm mt-2 bg-blue-950 text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
