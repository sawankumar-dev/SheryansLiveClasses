import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([])
  const [isLoading, setIsLoggedIn] = useState(true);
  let getUserData = async () => {
    try {
      const res =  await axiosInstance.get('/users')
      setUsersData(res.data)
      setIsLoggedIn(false)
      console.log(res.data)
    } catch (error) { 
      console.log(error)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])
    if(isLoading) return <div className="h-screen w-full text-white bg-gray-600 flex justify-center items-center"> <h1>Loading...</h1></div>
  return (
    <div className="bg-gray-600 ">
      <h1>Users Page</h1>
      <div className="">
        {
          usersData.map((user) => <UserCard key={user.id} user={user}/>)
        }
      </div>
    </div>
  )
}

export default UsersPage