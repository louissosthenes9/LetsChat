import  { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogin = () => {
    const [loading,setLoading] = useState(false)
    const {setAuth} = useAuthContext()
    const login = async ({username,password})=>{
        const success = handleInputErrors({ username, password });
		if (!success) return;
   
        setLoading(true)
        try {

            const res = await fetch("api/users/login",{
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })

            const data = await res.json()
            if(data){
                toast.success("data reached backend")
            }

            if(data.error){
                throw new Error(data.error)
                
            }
             toast.success("You have successfully login")
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuth(data)
      
        } catch (error) {

           console.log({error})
            
        }finally{
            setLoading(false)
        }
    }

  return {
    loading,login
  }
}

export default useLogin

function handleInputErrors({ username, password}) {
	if (!username) {
		toast.error("Please fill in username");
		return false;
	}else if (!password) {
        toast.error("Please fill in password")
    }

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}