
import './App.css'
import Home from './pages/home/Home.jsx';
import {Navigate, Route, Routes} from "react-router-dom"
import Login from './pages/login/Login'
import SignUp from "./pages/signup/SignUp.jsx";
import {Toaster} from "react-hot-toast"
import {useAuthContext} from "./context/AuthContext.jsx";

function App() {
 const {auth}= useAuthContext();
  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
          <Routes>
           <Route  path ='/' element={auth?<Home/>:<Navigate to="/login" />}/>
           <Route  path ='/login' element={auth?<Navigate to="/" />:<Login/>}/>
           <Route  path ='/signup' element={auth?<Navigate to="/" />:<SignUp />}/>
        </Routes>
        <Toaster/>
    </div>
      
    </>
  )
}

export default App
