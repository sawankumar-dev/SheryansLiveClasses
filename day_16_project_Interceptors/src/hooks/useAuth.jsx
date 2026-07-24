import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { MyStore } from "../context/AuthContext";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const { register, handleSubmit, reset} = useForm();
  const notify = () => toast("Logged in successfully")
  const { setIsLoggedIn, users, setUsers } = useContext(MyStore)
  const navigate= useNavigate()
  const loginSubmit = (data) => {
      const isVerified = users.find((user) => user.email === data.email)
      if(!isVerified) {
        navigate("/auth/register")
        return alert("First make your account")
      }
      setIsLoggedIn(true)
      notify()
      reset()
      localStorage.setItem("user", JSON.stringify(data))
      navigate("/")
  };
      const registerSubmit = (data) => {
      const existingUser = JSON.parse(localStorage.getItem("users")) || [];
      const existEmail = existingUser.find((user) => user.email === data.email);
      if(existEmail) {
        reset()
        return alert("This is email is already registered!")
      }
      existingUser.push(data)
      setUsers(existingUser)
      localStorage.setItem("users", JSON.stringify(existingUser))
      reset()
      navigate("/auth")
    }
    return {
        handleSubmit,
        register,
        loginSubmit,
        registerSubmit
    }
}