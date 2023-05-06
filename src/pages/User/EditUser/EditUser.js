import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { GetSingleUser, UpdateUser } from './../../../redux/actions/user';
import './EditUser.css'
export default function EditUser() {

  const { user } = useSelector(state => state.users)

  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    isAdmin: false,
    isSeller: false
  });


  const [ setError] = useState("")
  let { id } = useParams();




  let { name, email, phone, password, isAdmin, isSeller } = state
  const handelInputChangesel = (e) => {
    if (e) {

      if (e.target.value === 'Admin') {
        state.isAdmin = true;
        state.isSeller = false;
        info.isSeller = false;
        info.isAdmin = true;

      }
      else if (e.target.value === 'seller') {
        state.isSeller = true;
        state.isAdmin = false;
        info.isSeller = true;
        info.isAdmin = false;
      }
      else {
        state.isAdmin = false;
        state.isSeller = false;
        info.isAdmin = false;
        info.isSeller = false;
      }


    }
  }
  var boolCheck = false;
  const handelInputChange = (e) => {
    let { name, value } = e.target;
    if (e.target.name === 'password') {
      boolCheck = !boolCheck}
      
        setInfo({ ...info, [name]: value })
        setState({ ...state, [name]: value })




  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSingleUser(id))
  }, [dispatch, id])
  const [info, setInfo] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    isAdmin: false,
    isSeller: false
  });
  useEffect(() => {
    if (user) {
      setState({ ...user })

    }
  }, [user])
  
  const history = useHistory();
  const handelSubmet = (e) => {

    if (!boolCheck) {

      e.preventDefault();
      if (!name || !email || !phone) {
        setError("please input all input field")
      } else {
        dispatch(UpdateUser(info, id))
        setError("")
        history.push("/Users")

      }
    } else {
      if (!name || !email || !password || !phone) {
        setError("please input all input field")
      } else {
        dispatch(UpdateUser(state, id))
        setError("")
        history.push("/Users")

      }
    }
  }

  return (
    <>
      <Link to="/Users" className="nav-link">
        <button type="button" class="btn btn-btn ">Back</button></Link>
      <div className="user container ">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/AddUser">
            <button className="userAddButton btn-btn">Create</button>
          </Link>
        </div>
        <div className="userContainer row g-5">
          <div className="userShow col-md-6 col-12">
            <div className="userShowTop">
              <i className="bi bi-person-circle fs-1 userShowImg"></i>
              <div className="userShowTopTitle">
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <i className="bi bi-file-person userShowIcon"></i>
                <span className="userShowInfoTitle">{name || ""}</span>
              </div>
              
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <i className="bi bi-phone userShowIcon"></i>
                <span className="userShowInfoTitle">{phone || ""}</span>
              </div>
              <div className="userShowInfo">
                <i className="bi bi-envelope userShowIcon"></i>
                <span className="userShowInfoTitle">{email || ""}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate   col-md-6 col-12 ">
            <span className="userUpdateTitle">Edit</span>
            <form className=" row " onSubmit={handelSubmet}>
              <div className=" col-12">
                <div className="userUpdateItem">
                  <label>name</label>
                  <input
                    type="text"
                    placeholder="name"
                    className="userUpdateInput" name="name"
                    value={name} onChange={handelInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="test@test.com"
                    className="userUpdateInput" name="email"
                    value={email || ""} onChange={handelInputChange} />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput" name="phone"
                    value={phone | ""} onChange={handelInputChange} />
                </div>
                <div className="userUpdateItem">
                  <label>password</label>
                  <input
                    type="password"
                    placeholder="*******" 
                    className="userUpdateInput" name="password"
                    onChange={handelInputChange} />
                </div>
              </div>
              <div className="userUpdateItem">
                <label className="form-label fw-bold" style={{ fontSize: "13px" }}>Role</label>
                <select id="inputState" className="form-select" name="sel" onChange={handelInputChangesel}>
                  <option value="User">select</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="seller">Seller</option>
                </select>
              </div>
              <div className="userUpdateRight col-12 p-4">

              
                <button type="submit" className="btn btn-btn w-100" style={{ color: "black", fontSize: "14px" }}>Edit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}