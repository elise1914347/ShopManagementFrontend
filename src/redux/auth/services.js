import axios from "axios";

export const loginService = async(data)=>{
    try{
const res = await axios.post("http://localhost:4040/v1/shop/user/login",data)
return res
    }catch(err){
        console.log("error: ", err)
    }
}

// export const getAllProduct = async()=>{
//     try{
// const res = await axios.get("localhost:4040/v1/shop/product")
// return res
//     }catch(err){
//         console.log("error: ", err)
//     }
// }