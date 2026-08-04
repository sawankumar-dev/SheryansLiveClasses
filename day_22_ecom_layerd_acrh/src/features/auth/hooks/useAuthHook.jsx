import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const { register, reset, handleSubmit, formState: { errors } } =  useForm()
    const registerForm = (data) => {
        reset()
        navigate("/")
    }
    const loginForm = async (data) =>  {
        const res = await loginUserApi(data);
        dispatch(addUser(res))
        toast.success("user logged in")
        reset()
        navigate("/")
    }
    return {
        navigate,
        register, 
        handleSubmit,
        registerForm,
        loginForm,
    }
}