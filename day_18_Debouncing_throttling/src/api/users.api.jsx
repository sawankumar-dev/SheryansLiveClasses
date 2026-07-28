import axios from "axios";

 export   let getUsers = async () => {
    console.log("api vala fuction")
    let res = await axios.get("https://fakestoreapi.com/users")
    console.log(res.data)
};