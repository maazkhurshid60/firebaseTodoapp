import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom"
import Home from "../pages/Home/Home"
import Layout from "../layout/Layout"
import Login from "../pages/registeration/login/Login"
import Signup from "../pages/registeration/signup/Signup"

const Routing=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

    <Route element={<Layout />}>
                        {/* Place the /service route at the top */}
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                </Route>
    </Routes>
    </BrowserRouter>
}

export default Routing