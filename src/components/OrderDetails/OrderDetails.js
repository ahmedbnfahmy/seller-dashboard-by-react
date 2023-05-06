import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory,useParams } from 'react-router-dom';
// import { cancelOrder, changStatusOrder, details } from '../../redux/actions/orderAction'

export default function OrderDetails() {
    // const {order} = useSelector(state => state.orders)
    const { order } = useSelector(state => state.orders.orderDetails)
    // let { id } = useParams();
    const history = useHistory()
    let dispatch = useDispatch()
    // useEffect(() => {
    //     if(order._id){
    //        history.push('/orders)
    //     }
    // }, [dispatch]);
    return (
        <>
            {order && <div>
                <div className="container row ">
                    <div className="container-fluid my-3">
                        <span className='fs-1 text-muted'>Orders </span><span className="fs-6" > <a href="/" className="link-primary text-decoration-none mx-2">Home </a>/  <span className="text-muted">Orders</span> </span>
                    </div>
                    <div className="col-12 col-lg-6 p-3 table-responsive card">
                        <table className=" table-light border ">
                            <thead className="text-muted bg-secondary bg-opacity-10 p-3 fs-4">
                                <span className="mx-3">  <i className="bi fs-5 bi-cart-fill "></i></span><span >Order Details </span>
                            </thead>
                            <tbody>
                                <tr className="fs-5  border">
                                    <span className="mx-2  ">
                                        <button class="btn">
                                            <span class="badge bg-info">
                                                <i className="bi fs-5 bi-cart-fill "></i>
                                            </span>
                                        </button>
                                    </span>
                                    <span className="fs-6 "> #{order._id || ""}</span>
                                </tr>
                                <tr className="fs-5 border">
                                    <span className="mx-2  ">
                                        <button class="btn">
                                            <span class="badge bg-info">
                                                <i className="bi fs-5 bi-calendar-event-fill "></i>
                                            </span>
                                        </button>
                                    </span>
                                    <span className="fs-6">{order.createdAt || ""}</span>
                                </tr>


                                <tr className="fs-5 border">
                                    <span className="mx-2  ">
                                        <button class="btn">
                                            <span class="badge bg-info">
                                                <i className="bi fs-5 bi-wallet-fill "></i>
                                            </span>
                                        </button>
                                    </span>
                                    <span className="fs-6">{order.paymentmethod}</span>

                                </tr>


                            </tbody>

                        </table>
                    </div>




                    <div className="col-12 col-lg-6 p-3 table-responsive card">   <table className=" table-light border ">
                        <thead className="text-muted bg-secondary bg-opacity-10 p-3 fs-4">
                            <span className="mx-3">  <i className="bi fs-5 bi-person-fill "></i></span><span >Customer Details </span>
                        </thead>
                        <tbody>
                            <tr className="fs-5  border">
                                <span className="mx-2  ">
                                    <button class="btn">
                                        <span class="badge bg-info">
                                            <i className="bi fs-5 bi-person-fill "></i>
                                        </span>
                                    </button>
                                </span>
                                <span className="fs-6 "> {order.userId.name}</span>

                            </tr>

                            <tr className="fs-5 border">
                                <span className="mx-2  ">
                                    <button class="btn">
                                        <span class="badge bg-info">
                                            <i className="bi fs-5 bi-envelope-fill"></i>
                                        </span>
                                    </button>
                                </span>
                                <span className="fs-6">{order.userId.email}</span>

                            </tr>


                            <tr className="fs-5 border">
                                <span className="mx-2  ">
                                    <button class="btn">
                                        <span class="badge bg-info">
                                            <i className="bi fs-5 bi-telephone-fill"></i>
                                        </span>
                                    </button>
                                </span>
                                <span className="fs-6">{order.userId.phone}</span>

                            </tr>


                        </tbody>

                    </table>
                    </div>
                </div>
                <div className="container-fluid border p-0 ">

                    <div className="container p-2 fs-5 bg-secondary bg-opacity-10 ">
                        <i class="bi bi-exclamation-circle-fill "></i>
                        Order (#)
                    </div>
                    <div class="container row border p-0 m-auto">
                        <div class="col-lg-6 col-12  mt-3 ">
                            <div class="container-fluid m-0  p-2 fs-6 bg-secondary bg-opacity-10 ">
                                Shipping Address
                            </div>
                            <div class="container-fluid m-0  p-2 fs-6 border ">
                                <ul className=" list-unstyled ">
                                    <li>For: {order.shippingAddress.fullName}</li>
                                    <li>{order.shippingAddress.country || "Egypt"} </li>
                                    <li>{order.shippingAddress.city} </li>
                                    <li>{order.shippingAddress.governate} </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12  mt-3 ">
                            <div class="container-fluid m-0  p-2 fs-6 bg-secondary bg-opacity-10 ">
                                #  COST
                            </div>
                            <div class="container-fluid m-0  p-2 fs-6 border ">
                                <ul className=" list-unstyled ">
                                    <li>shippingPrice: {order.shippingPrice}</li>
                                    <li>taxPrice:{order.taxPrice} </li>
                                    <hr />
                                    <li>Total:{order.totalPrice} </li>
                                </ul>
                            </div>
                        </div>
                        <div class="container-fluid mt-3 border table-responsive card">
                            <table className=" table-light border table-bordered ">
                                <thead className="text-muted bg-secondary bg-opacity-10 p-3 fs-5">
                                    <th className=" col-1" > # </th>
                                    <th className=" col-5" >  Product Name  </th>
                                    <th className=" col-2" >   Product Quantity
                                    </th>
                                    <th className=" col-2" >  Product Price
                                    </th>
                                    <th className=" col-2" >  Seller #id
                                    </th>
                                    <th className=" col-2" >  Total
                                    </th>
                                </thead>
                                <tbody>
                                    {order.orderItems && order.orderItems.map((item, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1} </td>
                                                <td> {item.productId.name}</td>
                                                <td>  {item.quantity}</td>
                                                <td> {item.price}</td>
                                                <Link to={'/UserDetails/' +item.sellerId}>
                                                <td> {item.sellerId}</td>
                                                </Link>
                                                <td>{item.price * item.quantity} </td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td> Total</td>
                                        <td> </td>
                                        <td> </td>
                                        <td>  </td>
                                        <td>  </td>
                                        <td>{order.totalPrice} </td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
                {/* <div className="w-100 text-center">{order.isDelivered ?
                    (<h6 className="badge rounded-pill bg-success w-25 mt-3">Delivered</h6>) :
                    (<button className="btn btn-btn w-25  mt-3" disabled={!order.isPaid || order.isCancelled}
                        onClick={() => { dispatch(changStatusOrder(order._id)) ;history.push('/orders') }}> Deliver</button>)
                }</div> */}
                <div className="w-100 text-center">{order.isDelivered &&
                    (<h6 className="badge rounded-pill bg-success w-25 mt-3">Delivered</h6>) 
                }</div>
                {/* <div className="w-100 text-center">{order.isPaid ?
                    (<h6 className="badge rounded-pill bg-info w-25 mt-3">Paid</h6>) :
                    (<button className="btn btn-btn w-25  mt-3" disabled={order.isCancelled}
                        onClick={() => { dispatch(changStatusOrder(order._id)) ;history.push('/orders')}}> Pay</button>)
                }</div> */}
                <div className="w-100 text-center">{order.isPaid &&
                    (<h6 className="badge rounded-pill bg-info w-25 mt-3">Paid</h6>)
                }</div>
                {/* <div className="w-100 text-center">{order.isCancelled ?
                    (<h6 className="badge rounded-pill bg-danger w-25 mt-3">Cancelled</h6>) :
                    (<button className="btn btn-btn w-25  mt-3" disabled={order.isDelivered}
                        onClick={() => { dispatch(cancelOrder(order._id)); history.push('/orders')}}> Cancel</button>)
                }</div> */}
                <div className="w-100 text-center">{order.isCancelled &&
                    (<h6 className="badge rounded-pill bg-danger w-25 mt-3">Cancelled</h6>)
                }</div>

            </div>}


        </>
    )
}
