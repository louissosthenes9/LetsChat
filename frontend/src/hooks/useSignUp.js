import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSignUp = () => {
    const [loading,setLoading]=useState(false)
    const signup = async({fullName,username,password,confirmPassword,gender})=>{
          const success = handleInputErrors({
            fullName,username,password,confirmPassword,gender
          })

          if(!success) return;

          setLoading(true)
          try {
            const res = await fetch("http://localhost:3000/api/auth/signup",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

            const data = await res.json();
            console.log(data)
          } catch (error) {
            
          }finally{
            setLoading(false)
          }
     }

     return {loading,signup}

}

export default useSignUp


function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName|| !username|| !password|| !confirmPassword || !gender){
        toast.error("please fill in all the fields")
        return false
    }

    if(password !== confirmPassword){
        toast.error("passwords must match")
        return false
    }

    if(password.legth < 6){
        toast.error("Passwords must be atleast 6 characters")

        return false
    }
}