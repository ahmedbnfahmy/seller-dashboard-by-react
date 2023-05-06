import React from 'react'
import { useDispatch } from 'react-redux';
import { deletecitie } from '../../redux/actions/Cities'
import { Link } from 'react-router-dom'

export default function CetyTable({ CityData, keyc }) {
    let dispatch = useDispatch()
    const handeldelete = (id) => {
            dispatch(deletecitie(id));
    }
    return (
        <>
            <tr className="border-bottom">
                <td className="col ">
                    <div className="p-2 " > <span className="d-block font-weight-bold">{keyc+1}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{CityData.name}</span></div>
                    </div>
                </td>
                <td className="col ">
                    <div className="p-2"> <span className="font-weight-bold">{CityData.arName}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-column"> <span>{CityData.governateName}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-column"> <span>{CityData.arGovernateName}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 icons">
                        {/* <Link to={'/EditUser/'} className="nav-link d-inline">
                              <i class="bi bi-eye showicon"></i></Link> */}
                        <Link to={'/EditeCity/' + CityData._id} className="nav-link d-inline"> <i className="bi bi-pencil-square upicon"></i></Link>
                        <i class="bi bi-trash-fill delicon" onClick={() => handeldelete(CityData._id)}></i> </div>
                </td>
            </tr>

        </>
    )
}