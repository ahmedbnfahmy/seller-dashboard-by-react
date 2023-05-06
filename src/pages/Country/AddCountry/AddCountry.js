// import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { AddCountryAction, } from './../../../redux/actions/country';
// import './AddCountry.css'

// export default function AddCountry() {
//     const [state, setState] = useState({
//         name: '',
//         arName: ''
//     });

//     const [error, setError] = useState("")
//     const { name, arName } = state;

//     const handelInputChange = (e) => {
//         let { name, value } = e.target;
//         setState({ ...state, [name]: value })
//     };
//     const dispatch = useDispatch();
//     const history = useHistory();
    
//     const handelSubmet = (e) => {
//         e.preventDefault();
//         if (!name || !arName) {
//             setError("please enter values in fields")
//         } else {
//             console.log(state)
//             dispatch(AddCountryAction(state))
//             setError("")
//             history.push("/Countries")
//         }
//     }
//     return (
//         <>
//             <Link to="/countries" className="nav-link">
//                 <button type="button" class="btn btn-light">Back</button></Link>
//             <div className="container p-0  d-flex flex-column justify-content-center">
//                 <div className="col">
//                     <a className="a-link-nav-icon" href="/home">
//                         {/* <img src="pngegg.png" width="120px" alt="" srcset="" /> */}
//                     </a>
//                 </div>
//                 <div className="col-12 d-flex justify-content-center">
//                     <div className="form">
//                         <form className="row g-3" onSubmit={handelSubmet}>
//                             <h4 className="fs-3">Add Country</h4>
//                             {error && <h3 style={{ color: "red" }}>{error}</h3>}
//                             <div className="col-md-12">
//                                 <label className="form-label fw-bold" style={{ fontSize: "13px" }}>Name</label>
//                                 <input type="text" className="form-control" id="inputemail4" name="name"
//                                     placeholder="Egypt" value={name} onChange={handelInputChange} />
//                             </div>
//                             <div className="col-md-12">
//                                 <label className="form-label fw-bold" style={{ fontSize: "13px" }} dir='rtl'>الاسم </label>
//                                 <input type="text" className="form-control" id="inputpassp" name="arName"
//                                     placeholder="مصر" value={arName} onChange={handelInputChange} />
//                             </div>
//                             <div className="col-12">
//                                 <button type="submit" className="btn btn-btn w-100" style={{ color: "black", fontSize: "14px" }}
//                                 >Add</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// }