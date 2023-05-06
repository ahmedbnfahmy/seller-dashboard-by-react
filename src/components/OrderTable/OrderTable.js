import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cancelOrder, deliverOrder, details,changStatusOrder } from '../../redux/actions/Orders'
import './OrderTable.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderTable({ orderData,index }) {
    let dispatch = useDispatch()

    

    return (
        <>
            <tr className="border-bottom">
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{index+1}</span></div>
                    </div>
                </td>
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{orderData.createdAt.substring(0,10)}</span></div>
                    </div>
                </td>
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <Link to='/orderDetails' className="d-block font-weight-bold text-decoration-underline"
                        onClick={()=>{dispatch(details(orderData._id))}} data-toggle="modal" data-target="#staticBackdrop">
                            {orderData.shippingAddress.fullName}</Link></div>
                    </div>
                </td>
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{orderData.shippingAddress.country},
                        {orderData.shippingAddress.governate},{orderData.shippingAddress.city}
                        </span></div>
                    </div>
                </td>
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{orderData.totalPrice}</span></div>
                    </div>
                </td>
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">{orderData.paymentmethod}</span></div>
                    </div>
                </td>
                <td className="col td2">
                    <div className="p-2 d-flex flex-row align-items-center mb-2">
                        <div className="d-flex flex-column ml-2"> <span className="d-block font-weight-bold">
                            <div>{orderData.isDelivered ?
                            (<h6 className="badge rounded-pill bg-success">Delivered</h6>):
                            (<><button className="btn btn-btn   mt-3" disabled={!orderData.isPaid || orderData.isCancelled}
                            onClick={()=>{dispatch(changStatusOrder(orderData._id))}}> Deliver </button></>)
                            }
                                {orderData.isPaid ?
                            (<h6 className="badge rounded-pill bg-info">Paid</h6>):
                            (<><button className="btn btn-btn   mt-3" disabled={orderData.isCancelled}
                            onClick={()=>{dispatch(changStatusOrder(orderData._id))}}> Pay </button></>)
                            }
                            </div>
                            </span></div>
                    </div>
                </td>
                
            </tr>
        </>
    );
}