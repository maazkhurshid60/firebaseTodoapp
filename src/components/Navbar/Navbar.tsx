import { Link, useNavigate } from "react-router-dom";

const Navbar=()=>{
    const navigate=useNavigate()

    const isUser=localStorage.getItem("email")
    return <div className="bg-slate-500 px-8 py-2">
        <Link to={"/"}>Home</Link>

        {isUser ? <p onClick={()=>{localStorage.removeItem("email"),navigate("/login")}}>logout</p>: <>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
        </>
        }
       

        </div>
}

export default Navbar;