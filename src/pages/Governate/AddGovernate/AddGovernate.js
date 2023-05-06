// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';
// import { AddGovAction } from '../../../redux/actions/Governate';
// import { getCountriesList } from './../../../redux/actions/country';
// export default function AddGovernate() {
//     const { countries } = useSelector(state => state.countries)
//     const [state, setState] = useState({
//         name: '',
//         arName: '',
//         ctryName: '',
//         arCtryName: ''
//     });
//     const [error, setError] = useState("")
//     const { name, arName, ctryName, arCtryName } = state;


//     const handelInputChange = (e) => {
//         let { name, value } = e.target;
//         setState({ ...state, [name]: value })
//     };
//     const dispatch = useDispatch();
//     const history = useHistory();

//     useEffect(() => {
//         dispatch(getCountriesList());
//     }, []);
//     const handelSubmet = (e) => {
//         e.preventDefault();
//         if (!name || !arName || !ctryName || !arCtryName) {
//             console.log("hghgh")
//             setError("please input all input field")
//         } else {
//             console.log(state, 'state##')
//             dispatch(AddGovAction(state))
//             setError("")
//             history.push("/Governate")
//         }
//     }

//     return (
//         <>
//             <Link to="/Governate" className="nav-link">
//                 <button type="button" class="btn btn-btn m-3">Back</button></Link>
//             <div className="card  bg-light  " >
//                 <form className=" row w-100" onSubmit={handelSubmet}>
//                     <div className=" col-12 col-md-6">
//                         <label className="rounded-3 p-2 w-100"> Name</label>
//                         <input type="text" className="p-2 my-2 rounded-3 w-100 form-control"
//                             name="name"
//                             value={name} onChange={handelInputChange} />
//                         <label className="p-2 my-2 rounded-3 w-100">country</label>
                    
//                             <select placeholder="select Category " className="p-2 my-2 rounded-3 w-100 form-control" name="ctryName" id="" onChange={handelInputChange}>
//                             <option hidden={true} value="">
//                             select...
//                             </option>
//                             {countries && countries.map((country, index) => {
//                                 return (
//                                     <option value={country.name} key={index}>{country.name}</option>
//                                 );
//                             })}</select>
//                     </div>
//                     <div className="col-12 col-md-6 end-0 ms-auto">
//                         <label dir='rtl' className="p-2  rounded-3 w-100 ">الاسم</label>
//                         <input type="text" className="p-2 my-2 rounded-3 w-100 form-control"
//                             name="arName"
//                             value={arName} onChange={handelInputChange} />
                        
//                         <label dir='rtl' className="p-2 my-2 rounded-3 w-100 ">الدولة</label>
                        
//                         <select placeholder="select Category " className="p-2 my-2 rounded-3 w-100 form-control" name="arCtryName" id="" onChange={handelInputChange}>
//                         <option hidden={true} value="">
//                             select...
//                             </option>
//                             {countries && countries.map((country, index) => {
//                                 return (
                                    
//                                     <option value={country.arName} key={index}>{country.arName}</option>
//                                 );
//                             })}</select>
//                     </div>
//                     <button type="submit" className="btn btn-btn w-50 m-auto my-3">Add</button>
//                 </form>
//             </div>
//         </>
//     );
// }