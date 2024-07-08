import React from "react"
import { Navigate } from "react-router-dom"

export interface ProtectedRouteProps{
    children:React.ReactNode
}
const ProtectedRoute:React.FC<ProtectedRouteProps>=({children})=>{
    const isUser=localStorage.getItem("email")

  if(isUser){return children} else {return <Navigate to="/login"/>}
}
export default ProtectedRoute