import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddGovACity = (city) => async (dispatch) => {
    try {
        // console.log(dispatch,'dispatch')
      const response = await axiosInstance.post('/city',city); 
      console.log('AddGovACity',response)
      dispatch({
        type: "ADD_NEW_CITY",
        payload: response.data,
      });
      toast.success(`${response.data.name} was added successfully`, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err);
      toast.error(`${err.message} `, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
  };


export const getAllCities = () => async (dispatch) => {
    try {
        // console.log(dispatch)
      const response = await axiosInstance.get(`/city`); 
       console.log('getAllCities',response)
      dispatch({
        type: "GET_ALL_cITY",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const deletecitie = (id) => async (dispatch) => {
    try {
      //   console.log(dispatch)
      const response = await axiosInstance.delete(`/city/${id}`); 
      console.log('deletecitie',response)
      const res = await axiosInstance.get(`/city`); 
      dispatch({
        type: "DELET_CITIE",
        payload: res.data,
      });
      toast.success(`City was deleted successfully`, {
        position: toast.POSITION.TOP_RIGHT,
    });
    } catch (err) {
      console.log(err);
      toast.error(`${err.message} `, {
        position: toast.POSITION.TOP_RIGHT,
    });
    }
  };
  
  export const GetSingleCity = (id) => async (dispatch) => {
    try {
        console.log(dispatch)
      const response = await axiosInstance.get(`/city/city/${id}`); 
      console.log('GetSingleCity',response)
      dispatch({
        type: "GET_SINGIL_CITY",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const UpdateCity = (city , id) => async (dispatch) => {
    try {
      //   console.log(dispatch)
      const response = await axiosInstance.put(`/city/${id}`,city); 
      // console.log('response',response)
      dispatch({
        type: "UPDATE_CITY",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };


  export var total;
export const getCityPaginationtList = (pag) => async (dispatch) => {
    try {
          console.log(dispatch)
        const response = await axiosInstance.post(`/city/pagination?page=${pag}`);
        // console.log('responseg',response.data.data)
        total = response.data.pages;
        dispatch({
            type: "GET_CITY_LIST_PAGE",
            payload: response.data.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const getAllCitiesByGovName = (Name) => async (dispatch) => {
  try {
      // console.log(dispatch)
    const response = await axiosInstance.get(`/city/${Name}`); 
     console.log('getAllCities',response)
    dispatch({
      type: "GET_ALL_CITY_GOV_NAME",
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};