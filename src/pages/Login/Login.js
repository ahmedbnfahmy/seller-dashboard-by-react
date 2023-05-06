import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signIn } from "../../redux/actions/authAction";
import './Login.css';
import '../../assets/css/index.css'
import "react-toastify/dist/ReactToastify.css";

export default function Login(props) {
    // const auth = useSelector((state) => state.auth.authenticate);
    const dispatch = useDispatch();
    const history = useHistory();
    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });

    const token = localStorage.getItem('token');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds) ,  history.push('/'));
        
        setCreds({ email: "", password: "" });

       
    };
    useEffect(() => {        
        if(token){
            history.push('/')
        }
        }, [history, token])

 var bool=true;
const forPassType =(e)=>
{bool=!bool;
    if(!bool){
  
    e.target.className="bi bi-eye-fill eye position-absolute "
    document.getElementById("inputpass4").type='text'}
    else{
        e.target.className="bi bi-eye-slash-fill eye position-absolute "
        document.getElementById("inputpass4").type='password'
    }
}


        return (
        <>
            <div className="container p-0  d-flex flex-column justify-content-center ">
                <div className="col">
                    <a className="a-link-nav-icon " href="/home">
                        <img src="jumiaLogo2.png" className="d-flex justify-content-center mx-auto mt-5" width="200px" alt="" srcset="" />
                    </a>
                </div>
                <div className="col-12 d-flex justify-content-center my-5">
                    <div className="form bg-white rounded shadow">
                        <form className="row g-3 bg-white" onSubmit={handleSubmit}>
                            <div className="col-md-12">
                                <h4 className="fs-3">Sign-In</h4>
                                <label for="inputemail4" className="form-label fw-bold" style={{ fontSize: "13px" }}
                                >Email </label>
                                <input type="email" className="form-control" id="inputemail4" 
                                value={creds.email}
                                onChange={(e) => setCreds({ ...creds, email: e.target.value })}/>
                            </div>
                            <div className="col-md-12 position-relative">
                                <label for="inputpass4" className="form-label fw-bold" style={{ fontSize: "13px" }}
                                >Password </label>
                                <input type="password" className="form-control " id="inputpass4" 
                                value={creds.password}
                                onChange={(e) => setCreds({ ...creds, password: e.target.value })}/>
                                <i className="bi bi-eye-slash-fill eye position-absolute " onClick={forPassType}></i>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn rounded-pill w-100" style={{ backgroundColor:"orange",color: "black", fontSize: "14px" }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
