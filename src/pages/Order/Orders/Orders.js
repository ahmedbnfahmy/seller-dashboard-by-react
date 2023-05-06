import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import OrderTable from "../../../components/OrderTable/OrderTable";
import { total, getOrderPaginationtList } from './../../../redux/actions/Orders';
import Pagination from "../../../components/Pagination/Pagination";
import { useParams } from 'react-router-dom';
import { getAllGovernment } from '../../../redux/actions/Governate'
import './Orders.css';

export default function Orders() {
const [searchTerm,setSearchTerm] = useState('')

    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders)
    const { govers } = useSelector(state => state.goverments)
    // console.log(">>>>>>",gov)
    const { num } = useParams() || 1;
    const [page, setPage] = useState(num);
    const pages = total || 1;
    useEffect(() => {
        dispatch(getAllGovernment())
    }, [dispatch])

    const [state, setState] = useState({
        checValue: "",
        checkKey: ""
    });

    const { checkKey } = state

    const handelIKeyChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    const handelValuChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    // useEffect(() => {
    //     dispatch(getOrdersList());
    // }, []);
    useEffect(() => {
        dispatch(getOrderPaginationtList(page, state));
    }, [dispatch, page, state]);
    return (
        <>




            <div className="ms-auto row mb-3 col-12 col-lg-6 ">
            <div className="topnav__search col-6">
                <input type="text" placeholder='Search here...' onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}/>
                <i className='bx bx-search'></i>
            </div>
                <div className="col-3">
                    <select placeholder="checkKey " class="form-control  topnav__search" name="checkKey" onChange={handelIKeyChange}>
                        <option hidden={true} value=''>select...</option>
                        <option disabled={true} value=''>select...</option>
                        <option value='payMeth'>Payment Method</option>
                        <option value='governate'>governate</option>
                        <option value='Status'>Status</option>
                        {/* <option value='category'>category</option> */}

                    </select>
                    </div>
                    
                <div className="col-3">
                    <select disabled={checkKey === ''} placeholder="checValue " class="form-control  topnav__search" name="checValue" onChange={handelValuChange}>
                        <option hidden={true} value=''>select...</option>
                        {
                            checkKey && checkKey === 'payMeth' &&
                            <>
                                <option value='PayPal'>PayPal</option>
                                <option value='CashOnDelivery'>CashOnDelivery</option>
                            </>
                        }
                        {checkKey && checkKey === 'governate' &&
                            govers && govers.map((gover, index) => {
                                return (
                                    <>
                                        <option value={gover.name}>{gover.name}</option>
                                    </>)
                            })
                        }
                        {
                            checkKey && checkKey === 'Status' &&

                            <>
                                <option value='Cancelled'>Cancelled</option>
                                <option value='Delivered'>Delivered</option>
                                <option value='Paid'>Paid</option>
                            </>
                        }




                    </select></div>
                    
            </div>

            <div className="container table-responsive card">

                <table className="table table-borderless  ">
                    <thead className="bg-table-th" >
                        <tr className="border-bottom ">
                            <th className="th1"> <span className="col">#</span> </th>
                            <th className="th2"> <span className="ml-2 col">Date</span> </th>
                            <th className="th2"> <span className="ml-2 col">User</span> </th>
                            <th className="th3"> <span className="ml-2 col">All Locations</span> </th>
                            <th className="th4"> <span className="ml-2 col">Total</span> </th>
                            <th className="th5"> <span className="ml-2 col">Payment Method</span> </th>
                            <th className="th5"> <span className="ml-2 col">Status</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.shippingAddress.fullName.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((order, index) => {
                            return (
                                <OrderTable key={order._id} index={index} orderData={order} />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination page={page || 1} pages={pages} changePage={setPage} />
        </>
    );
}