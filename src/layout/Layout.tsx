import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const Layout=()=>{
    const isUser=localStorage.getItem("email")

    return  <>
    {isUser? <><Navbar/>
<div className="bg-red-400 h-8">

    <Outlet/>
</div></>:<Navigate to="/login"/>}
    
    </>
}

export default Layout