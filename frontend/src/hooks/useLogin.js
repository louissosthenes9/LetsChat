import  { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogin = () => {
    const [loading,setLoading] = useState(false)
    const {setAuth} = useAuthContext()
    const login = async (username,password)=>{
        setLoading(true)
        try {

            const res = await fetch("api/users/login",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })

            const data = await res.json()

            if(data.error){
                throw new Error(data.error)
            }
             
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuth(data)
      
        } catch (error) {

            toast.error(error)
            
        }finally{
            setLoading(false)
        }
    }

  return {
    loading,login
  }
}

export default useLogin