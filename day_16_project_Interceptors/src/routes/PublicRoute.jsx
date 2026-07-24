import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MyStore } from "../context/AuthContext";

const PublicRoute = () => {
    const { isLoggedIn } = useContext(MyStore);
    console.log(isLoggedIn)
    if(isLoggedIn) {
      return <Navigate to="/" replace/>
    }
  return (
    <Outlet/>
  )
}

export default PublicRoute