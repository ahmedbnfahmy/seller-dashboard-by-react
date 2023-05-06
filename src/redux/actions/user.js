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
export const getUserList = (pag, x) => async (dispatch) => {
  try {
    const response = await axiosInstance.post(
      `/users/filter?page=${pag}`,
      x
    );
    total = response.data.pages;
    dispatch({
      type: "GET_Users_LIST",
      payload: response.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const getAllUsers = () => async (dispatch) => {
  try {
    //   console.log(dispatch)
    const response = await axiosInstance.get(`/users`);
    // console.log('response',response)
    dispatch({
      type: "GET_ALL_USERS",
      payload: response.data.Users,
    });

  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const AddNewUser = (prod) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/users/addNew", prod);
    dispatch({
      type: "ADD_USER",
      payload: response.data,
    });
    toast.success(`User added successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};



export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    const res = await axiosInstance.post(`/users/filter?page=1`);
    dispatch({
      type: "DELET_USER",
      payload: res.data,
    });
    toast.success(`User deleted successfully`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err);
    toast.error(`${err.message} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const GetSingleUser = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    dispatch({
      type: "GET_SINGIL_user",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UpdateUser = (pro, id) => async (dispatch) => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, pro);
    dispatch({
      type: "UPDATE_USER",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

