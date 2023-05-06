import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCountry } from '../../redux/actions/country'
import './CountryTable.css'

export default function CountryTable({ countryData,index }) {
    let dispatch = useDispatch()
    const handeldelete = (id) => {
            dispatch(deleteCountry(id));
    }
    return (
        <>
            <tr className="border-bottom">
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{index+1}</span></div>
                    </div>
                </td>
                <td className="col td3">
                    <div className="p-2"> <span className="font-weight-bold">{countryData.name}</span> </div>
                </td>
                <td className="col td4">
                    <div className="p-2 d-flex flex-column"> <span>{countryData.arName}</span> </div>
                </td>
                <td className="col h-100">
                    <div className=" row justify-content-between align-content-center  ">
                        <Link to={'/EditCountry/' + countryData._id} className="  col-12 d-flex col-md-4 justify-content-center text-center align-content-center"> 
                            <i class="bi bi-pencil-square upicon"></i>
                        </Link  >
                        <i class="bi bi-trash-fill delicon col-12 d-flex col-md-4 justify-content-center text-center align-content-center" onClick={() => handeldelete(countryData._id)}></i> </div>
                </td>
            </tr>
        </>
    );
}