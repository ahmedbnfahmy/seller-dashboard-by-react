import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AddGovACity } from '../../../redux/actions/Cities'
import { getAllGovernment } from './../../../redux/actions/Governate';
export default function AddCities() {
    const { govers } = useSelector(state => state.goverments)
    const [state, setState] = useState({
        name: '',
        arName: '',
        governateName: '',
        arGovernateName: ''
    });

    const [error, setError] = useState("")

    const { name, arName, governateName, arGovernateName } = state
    useEffect(() => {
        dispatch(getAllGovernment());
    }, []);
    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const dispatch = useDispatch();
    const history = useHistory();



    const handelSubmet = (e) => {
        e.preventDefault();
        if (!name || !arName || !governateName || !arGovernateName) {
            setError("please input all input field")
        } else {
            console.log(state, 'state')
            dispatch(AddGovACity(state))
            setError("")
            history.push("/Cities")
        }
    }
    return (
        <>


            <Link to="/Cities" className="nav-link">
                <button type="button" class="btn btn-btn">Back</button></Link>

            <div className="productBottom ">
                <form className="productForm row" onSubmit={handelSubmet}>
                    <div className="productFormLeft col-12 col-md-6 ">
                        <label> Name</label>
                        <input type="text"
                            name="name"
                            value={name} onChange={handelInputChange} />
                        <label>Governate Name</label>
                        {/* <input type="text"
                            name="governateName"
                            value={governateName} onChange={handelInputChange} /> */}

                        <select placeholder="select Category " class="form-control" name="governateName" id="" onChange={handelInputChange}>
                        <option hidden={true} value="">
                            select...
                            </option>
                            {govers && govers.map((gov, index) => {
                                return (
                                    <option value={gov.name} key={index}>{gov.name}</option>
                                );
                            })}</select>
                    </div>
                    <div className="productFormLeft col-12 col-md-6 ">
                        <label dir='rtl'>اسم المدينة</label>
                        <input type="text"
                            name="arName"
                            value={arName} onChange={handelInputChange} />
                        <label dir='rtl'>اسم المحافظة</label>
                        {/* <input type="text"
                            name="arGovernateName"
                            value={arGovernateName} onChange={handelInputChange} /> */}
                            <select placeholder="select Category " class="form-control" name="arGovernateName" id="" onChange={handelInputChange}>
                            <option hidden={true} value="">
                            select...
                            </option>
                            {govers && govers.map((gov, index) => {
                                return (
                                    <option value={gov.arName} key={index}>{gov.arName}</option>
                                );
                            })}</select>
                    </div>
                    <button type="submit" className="btn btn-btn w-50 m-auto mt-5">Add</button>

                </form>
            </div>

        </>
    );
}