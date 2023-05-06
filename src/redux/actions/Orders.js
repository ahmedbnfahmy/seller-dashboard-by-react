import { axiosInstance } from '../../netWork/netWork';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getOrdersList = () => async (dispatch) => {
    try {
      const response = await axiosInstance.get(`/order`); 
      console.log('orders=',response)
      dispatch({
        type: "GET_ORDERS_LIST",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
    }
};
export const deliverOrder = (orderId) => async (dispatch) => {
  try {
    const response = await axiosInstance.put(`/order/${orderId}`); 
    alert("Delivered Success")
    console.log('orders=',response)
    dispatch({
      type: "GET_ALL_AD_ORDERS_REQUEST",
      payload: response.data,
    });
    window.location.href('/orders')
  } catch (err) {
    console.log(err.response);
    toast.error(err.response?.data.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
  });
  }
};
export const cancelOrder = (orderId) => async (dispatch) => {
    try {
      const response = await axiosInstance.put(`/order/cancel/${orderId}`); 
      
      const res = await axiosInstance.get(`/order`); 
      dispatch({
        type: "GET_ALL_AC_ORDERS_REQUEST",
        payload: res.data,
      });
      toast.success(`Cancelled Success`, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
    }
};
export const cancelOneOrder = (orderId) => async (dispatch) => {
    try {
      const response = await axiosInstance.put(`/order/cancel/${orderId}`);
      dispatch({
        type: "GET_ALL_AC_ORDER_REQUEST",
        payload: response.data,
      });
      toast.success(`Cancelled Success`, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
    }
};

export const changStatusOrder = (orderId) => async (dispatch) => {
    try {
      const response = await axiosInstance.put(`/order/${orderId}`); 
      const res = await axiosInstance.get(`/order`);
      console.log('changStatusOrder=',res)
      dispatch({
        type: "GET_ALL_AD_ORDERS_REQUEST",
        payload: res.data,
      });
      toast.success(`Change status is success `, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err.response);
      toast.error(err.response?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
};
export const changStatusOneOrder = (orderId) => async (dispatch) => {
    try {
      const res = await axiosInstance.put(`/order/${orderId}`); 
      const response = await axiosInstance.get(`/order/user/${orderId}`);
      dispatch({
        type: "GET_ALL_AD_ORDER_REQUEST",
        payload: response.data,
      });
      toast.success(`Change status is success `, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err.response);
      toast.error(err.response?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
};

export const details = (orderId) => async (dispatch) => {
    try {
      const response = await axiosInstance.get(`/order/user/${orderId}`);
      console.log('details=',response)
      dispatch({
        type: "GET_DETAILS_ORDERS",
        payload: {
          order: response.data,
        },
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
    }
};

export const getAllOrder = () => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/order`); 
    // console.log('response',response)
    dispatch({
      type: "GET_ALL_ORDER",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
  });
  }
};


export const latestWeekIncome = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/order/chart/incomWeekly`); 
    console.log('%%%%%',response)
    dispatch({
      type: "LATEST_WEEKLY_INCOME",
      payload: response.data[0].sales,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
  });
  }
};
export const DailyOrders = () => async (dispatch) => {
  try {
      console.log("kkkkkkkkk")
    const response = await axiosInstance.get(`/order/chart/dailyOrders`); 
    console.log('dailyOrders',response)
    dispatch({
      type: "GET_DAILY_ORDERS",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
  });
  }
};


export const top10Client = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/order/top/tenClients`); 
    console.log('dailyOrders',response)
    dispatch({
      type: "TOP_10_CLIENT",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
  });
  }
};
export var total;
export const getOrderPaginationtList = (pag,x) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.post(`/order/pagination?page=${pag}`,x);
        // console.log('response',response)
        // console.log('responseg',response.data.data)
        total = response.data.pages;
        dispatch({
            type: "GET_ORDER_LIST_PAGE",
            payload: response.data.data
        });
    } catch (err) {
        console.log(err);
    }
};


export const _getAllOrder = () => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/seller`); 
    // console.log('response',response)
    dispatch({
      type: "GET_ALL_ORDER_BY_DETAILS",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
  });
  }
};