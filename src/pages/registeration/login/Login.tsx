import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link, useNavigate } from "react-router-dom";
import TextField from "../../../components/InputFields/TextField/TextField";
import PasswordField from "../../../components/InputFields/PasswordField/PasswordField";
import Button from "../../../components/Buttons/Button/Button";
import { loginSchema } from "../../../schemas/auth.schema";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword ,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(loginSchema) },)

    const navigate=useNavigate()
    // LOGIN FUNCTION STARTS
    const loginFunction = async(data:any) => {
        console.log(data)
try {
    const user=await signInWithEmailAndPassword(auth, data?.email,data?.password)
        console.log(JSON.stringify(user?.user?.providerData[0]?.email))
        localStorage.setItem("email",JSON.stringify(user?.user?.providerData[0]?.email))
    toast.success("user has login")   
       navigate("/")
    
} catch (error) {
    toast.error(`${error}`)
    
}
        
    }
    // LOGIN FUNCTION ENDS

    const loginWithGoogleFunction = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("email", JSON.stringify(result?.user?.providerData[0]?.email));
                navigate("/");
            })
            .catch((err) => console.log(err));
    };
    
    return <div className="w-full bg-whiteColor flex items-center justify-center h-[100vh] ">
        <div className="w-[95%] border-[1px] border-borderColor border-solid rounded-xl text-center shadow-lgShadow py-6 px-8
                        sm:w-[65%] 
                        md:py-8 md:px-10 
                         lg:py-10 lg:px-12
                        xl:w-[35%] xl:py-12 xl:px-14">
            {/* HEADER STARTS */}
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="px-6 tracking-wide py-2 bg-primaryColor rounded-md 
                           inline-block text-whiteColor font-semibold text-base
                           sm:text-xl
                           lg:text-2xl ">
                    Logo
                </h1>
                <p className="capitalize font-medium text-sm md:text-lg opacity-[65%]">Enter Your Email & Password</p>
            </div>
            {/* HEADER ENDS */}
            {/* FORM STARTS */}
            <form onSubmit={handleSubmit(loginFunction)} className="flex flex-col gap-4 mt-8">
               
                    <TextField label="Email" register={register} error={errors?.email} name="email"/>

                    <PasswordField label="Password" register={register} error={errors?.password} name="password"/>

                    <Button  text="login"/>
                    <div>Don't have an Account? <Link to="/signup" className="text-primaryColor font-semibold capitalize">create an account</Link></div>
          
            </form>
            {/* FORM ENDS */}
        <div className="flex items-center gap-x-4">
            <FcGoogle onClick={loginWithGoogleFunction} size={24} />
            <FaGithubSquare className="" size={24} />

        </div>
        </div>
    </div>
}

export default Login