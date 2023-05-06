import { axiosInstance } from "../../netWork/netWork";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = {
  headers: {
    "content-type":
      "multipart/form-data; boundary=--------------------------037384031508980924639346",
  },
};

export const GetCategorySubCategory = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/category/supCategory/${id}`);

    dispatch({
      type: "GET_CATEGORY_SUBCATEGORY",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
