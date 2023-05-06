import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteGov } from '../../redux/actions/Governate'
import { Link } from 'react-router-dom'

export default function GovernatesTable({ govData, keyg }) {
    let dispatch = useDispatch()
    const handeldelete = (id) => {
            dispatch(deleteGov(id));
    }
    return (
        <>
            <tr className="border-bottom">
                <td className="col ">
                    <div className="p-2 " > <span className="d-block font-weight-bold">{keyg+1}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{govData.name}</span></div>
                    </div>
                </td>
                <td className="col ">
                    <div className="p-2"> <span className="font-weight-bold">{govData.arName}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-column"> <span>{govData.ctryName}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 d-flex flex-column"> <span>{govData.arCtryName}</span> </div>
                </td>
                <td className="col ">
                    <div className="p-2 icons">
                        {/* <Link to={'/EditUser/'} className="nav-link d-inline">
                              <i class="bi bi-eye showicon"></i></Link> */}
                        <Link to={'/EditeGovernate/' + govData.name} className="nav-link d-inline"> <i className="bi bi-pencil-square upicon"></i></Link>
                        <i class="bi bi-trash-fill delicon" onClick={() => handeldelete(govData._id)}></i> </div>
                </td>
            </tr>

        </>
    )
}