import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router"
import { addUser } from "../redux/features/authSlice";

export const useAuth = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const dispatch = useDispatch()
    const [ registerUser, setRegisterUser ] = useState(() => {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users): []
    })
    const handleRegister = (data) => {
        // console.log(data)
        let arr = [...registerUser, data];
        localStorage.setItem("users", JSON.stringify(arr))
        alert("user account created successfully")
        navigate('/')
        reset()
    }
    const handleLogin = (data) => {
        let user = registerUser.find((user) => {
            return user.email === data.email && user.password === data.password;
        });
        if(!user) {
            navigate("/register")
            return alert("User nhi mila")
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(addUser(user));
        alert("User add ho gay")
        reset()
    }
    return {
        navigate,
        register, handleSubmit,
        reset, 
        errors,
        handleRegister,
        handleLogin,
    }
}