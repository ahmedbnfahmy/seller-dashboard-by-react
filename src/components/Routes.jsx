import React, {Suspense,useEffect} from 'react'

import { Route, Switch ,Redirect,BrowserRouter} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
// import Customers from '../pages/Customers'
import Login from '../pages/Login/Login'
import Customers from '../pages/User/Users/Users'
import AddUser from '../pages/User/AddUser/AddUser'
import EditUser from '../pages/User/EditUser/EditUser'
import Countries from '../pages/Country/Countries/Countries'
import AddCountry from '../pages/Country/AddCountry/AddCountry'
// import EditCountry from '../pages/Country/EditCountry/EditCountry'
import Orders from '../pages/Order/Orders/Orders'
import OrderDetails from '../components/OrderDetails/OrderDetails'
import PrivateRoute from './PrivateRoute'
import Category from './../pages/Category/Category'
import NewCategory from './../pages/Category/NewCategory'
import EditCategory from './../pages/Category/EditCategory'
import EditSubCategory from './../pages/Category/EditSubCategory'
import SubCategory from './../pages/Category/SubCategory'
import Products from './../pages/Product/Product'
import FormProduct from '../pages/Product/FormProduct/FormProduct'
import ProductDetails from './../pages/Product/ProductDetails/index'
import GetGoverment from './../pages/Governate/Governate'
import AddGovernate from './../pages/Governate/AddGovernate/AddGovernate'
// import EditeGovernate from './../pages/Governate/EditGovernate/EditGovernate'
import GetCities from './../pages/Cities/Cities'
// import EditeCity from './../pages/Cities/EditCities/EditCities'
import AddCities from './../pages/Cities/AddCities/AddCities'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../redux/actions/ThemeAction'
import Sidebar from './sidebar/Sidebar'
import TopNav from './topnav/TopNav'
import './layout/layout.css'
import NotFound from './../pages/NotFound'
import UserDetails from '../pages/User/UserDetails/UserDetails'
// import EditAddress from '../pages/User/UserDetails/EditAddress'
// import Coupons from '../pages/Coupon/Coupons'
// import AddCoupons from '../pages/Coupon/AddCoupons';
// import EditCoupon from '../pages/Coupon/EditCoupon'
import Sellers from '../pages/sellers/sellers/sellers'
import SellerOrders from '../pages/sellers/SellerOrders/SellerOrders'
import CategoryDetails from '../pages/Category/CategoryDetails'
import CategoryForm from '../pages/Category/AddCategory/CategoryForm'

// import { useSelector, useDispatch } from 'react-redux'



const Routes = () => {
    const token = localStorage.getItem('token');
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
    return (
        <>
        
        <Suspense fallback="....Loading">
        <Switch>
            <Route path='/login' exact component={Login}/>            
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                        <PrivateRoute path='/' exact component={Dashboard}/>
                        <PrivateRoute path='/Users' exact component={Customers}/>
                        <PrivateRoute path='/AddUser' exact component={AddUser}/>
                        {/* <PrivateRoute path='/AddUser/:id' exact component={AddUser}/> */}
                        <PrivateRoute path='/EditUser/:id' exact component={EditUser}/>
                        <PrivateRoute path='/Countries' exact component={Countries}/>
                        <PrivateRoute path='/AddCountry' exact component={AddCountry}/>
                        {/* <PrivateRoute path='/EditCountry/:id' exact component={EditCountry}/> */}
                        <PrivateRoute path='/orders' exact component={Orders}/>
                        <PrivateRoute path='/orderDetails' exact component={OrderDetails}/>            
                        <PrivateRoute path="/category" exact component={Category}/>
                        <PrivateRoute path="/AddCategory" exact component={CategoryForm}/>
                        <PrivateRoute path="/AddCategory/:id" exact component={CategoryForm}/>
                        <PrivateRoute path="/CategoryDetails/:id" exact component={CategoryDetails}/>
                        <PrivateRoute path="/AddCat" exact component={NewCategory}/>
                        <PrivateRoute path="/EditCate/:nameCat" exact component={EditCategory}/>
                        <PrivateRoute path="/EditSubCate/:id" exact component={EditSubCategory}/>
                        <PrivateRoute path="/SubCate/:nameCat" exact component={SubCategory}/>
                        <PrivateRoute path="/products" exact component={Products}/>
                        <PrivateRoute path="/products/:num" exact component={Products}/>
                        <PrivateRoute path="/FormProduct" exact component={FormProduct}/>
                        <PrivateRoute path="/FormProduct/:id" exact component={FormProduct}/>
                        <PrivateRoute path="/ProductDetails/:id" exact component={ProductDetails}/>
                        <PrivateRoute path="/Governate" exact component={GetGoverment}/>
                        <PrivateRoute path="/AddGovernate" exact component={AddGovernate}/>
                        {/* <PrivateRoute path="/EditeGovernate/:nameg" exact component={EditeGovernate}/> */}
                        <PrivateRoute path="/Cities" exact component={GetCities}/> 
                        {/* <PrivateRoute path="/EditeCity/:id" exact component={EditeCity}/> */}
                        <PrivateRoute path="/AddCety" exact component={AddCities}/>
                        <PrivateRoute path="/UserDetails/:id" exact component={UserDetails}/>
                        {/* <PrivateRoute path="/EditAddress/:id" exact component={EditAddress}/> */}
                        {/* <PrivateRoute path="/Coupons" exact component={Coupons}/>
                        <PrivateRoute path="/AddCoupon" exact component={AddCoupons}/>
                        <PrivateRoute path="/EditCoupon/:id" exact component={EditCoupon}/> */}
                        <PrivateRoute path="/sellers" exact component={Sellers}/>
                        <PrivateRoute path="/seller-orders/:id" exact component={SellerOrders}/>
                        

                        </div>
                    </div>
                    {/* <Route path="*" exact={true}  component={NotFound} /> */}
                </div>
            )}/>
            
        </Switch>
        </Suspense>

        </>
    )
}

export default Routes
