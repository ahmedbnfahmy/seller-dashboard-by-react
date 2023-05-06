import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signIn = (data)=> async(dispatch)=>{
    try{
        const res = await axiosInstance.post(`/auth/seller/login`,data);
        console.log("from action",res)
        dispatch({
            type: "SIGN_IN",
            payload:{
                token:res.data.token,
                user:res.data.user
            }
        });
        toast.success("Welcome again,...", {
                position: toast.POSITION.TOP_RIGHT,
            });
    }catch(err){
        console.log(err.response)
        toast.error(err.response?.data, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
}
////////////////

export const signOut = ()=> async(dispatch)=>{
    try{
        dispatch({
            type: "SIGN_OUT"
        });
    }catch(err){
        console.log(err)
    }
}



