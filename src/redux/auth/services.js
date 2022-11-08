import axios from "axios";

export const loginService = async(data)=>{
    try{
const res = await axios.post("http://localhost:4040/v1/shop/user/login")
    }catch(err){
        console.log("error: ", err)
    }
}