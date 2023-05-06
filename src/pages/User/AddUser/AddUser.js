import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddUser.css'
import { AddNewUser } from '../../../redux/actions/user';
export default function AddUser() {

  const [state, setState] = useState({
    
    name: '',
    email: '',
    phone: '',
    password: '',
    isAdmin: false,
    isSeller: false
  });

  const [error, setError] = useState("")

  

  const { name, email, phone, password, isAdmin, isSeller } = state

  const handelInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  };
  const dispatch = useDispatch();
  const history = useHistory();


  const handelInputChangesel = (e) => {
    if (e.target.value === 'Admin') {
      state.isAdmin = true
      state.isSeller = false

    }
    if (e.target.value === 'seller') {
      state.isSeller = true
      state.isAdmin = false

    }
  }

  const handelSubmet = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      // if (!name || !email ||!phone) {
      setError("please enter values in fields")
    } else {
      dispatch(AddNewUser(state))
      setError("")
      history.push("/Users")
    }
  }

  return (
    <>
      <Link to="/Users" className="nav-link m-3">
        <button type="button" class="btn btn-btn">Back</button></Link>

      <div className="container p-0  d-flex flex-column justify-content-center">

        <div className="col-12 d-flex justify-content-center">
          <div className="form">
            <form className="row g-3" onSubmit={handelSubmet}>
              <h4 className="fs-3">Add user</h4>
              {error && <h3 style={{ color: "red" }}>{error}</h3>}
              <div className="col-md-12">
                <label className="form-label fw-bold" style={{ fontSize: "13px" }}>Email </label>
                <input type="email" className="form-control" id="inputemail4" name="email"
                  placeholder="test@test.com" value={email} onChange={handelInputChange} />
              </div>
              <div className="col-md-12">
                <label className="form-label fw-bold" style={{ fontSize: "13px" }}>Password </label>
                <input type="password" className="form-control" id="inputpassp" name="password"
                  placeholder="***" value={password} onChange={handelInputChange} />
              </div>
              <div className="col-md-12">
                <label className="form-label fw-bold" style={{ fontSize: "13px" }}>name </label>
                <input type="text" className="form-control" id="inputpassn" name="name"
                  placeholder="name" value={name} onChange={handelInputChange} />
              </div>
              <div className="col-md-12">
                <label f className="form-label fw-bold" style={{ fontSize: "13px" }}>Phone </label>
                <input type="text" className="form-control" id="inputpassph" name="phone"
                  placeholder="01*********" value={phone} onChange={handelInputChange} />
              </div>

              <div className="col-md-12">
                <label className="form-label fw-bold" style={{ fontSize: "13px" }}>State</label>
                <select id="inputState" className="form-select" name="sel" onChange={handelInputChangesel}>
                  <option value="User">select</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="seller">seller</option>
                </select>
              </div>
              <div className="col-12">
                <button type="submit" className="btn w-100 btn-btn" style={{ color: "black", fontSize: "14px" }}
                >Add</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}