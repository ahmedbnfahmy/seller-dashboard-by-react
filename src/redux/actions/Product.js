import { axiosInstance } from "../../netWork/netWork";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = {
  headers: {
    "content-type":
      "multipart/form-data; boundary=--------------------------037384031508980924639346",
  },
};

export var total;
export const getProductList = (pag, x) => async (dispatch) => {
  try {
    const response = await axiosInstance.post(
      `/products/filter?page=${pag}`,
      x
    );
    total = response.data.pages;
    dispatch({
      type: "GET_Products_LIST",
      payload: response.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const AddNewProduct = (prod) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/products", prod, config);
    dispatch({
      type: "ADD_PRODUCT",
      payload: response.data,
    });
    toast.success(`Product was added successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};



export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    const res = await axiosInstance.post(`/products/filter?page=1`);
    dispatch({
      type: "DELET_PRODUCT",
      payload: res.data,
    });
    toast.success(`Item deleted successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const GetSingleProduct = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/products/details/${id}`);
    dispatch({
      type: "GET_SINGIL_Product",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UpdateProduct = (pro, id) => async (dispatch) => {
  try {
    const response = await axiosInstance.put(`/products/${id}`, pro, config);
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const GetProductsCategories = () => async (dispatch) => {
  try {
      //   console.log(dispatch)
      const response = await axiosInstance.get(`/products/chart/productCategories`);
      console.log('response', response)
      dispatch({
          type: "GET_Products_CATEGORIES",
          payload: response.data,
      });
  } catch (err) {
      console.log(err);
  }
};


