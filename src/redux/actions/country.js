import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getCountriesList = () => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.get(`/country/`);
        console.log('getCountriesList', response)
        dispatch({
            type: "GET_COUNTRIES_LIST",
            payload: response.data,
        });
        
    } catch (err) {
        console.log(err);
        
    }
};


export const deleteCountry = (id) => async (dispatch) => {
    try {
        const response = await axiosInstance.delete(`/country/${id}`);
        const res = await axiosInstance.get(`/country/`);
        console.log('deleteCountry',res)
        dispatch({
            type: "DELET_COUNTRY",
            payload: res.data,
        });
        toast.success(`Country was deleted successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};


export const AddCountryAction = (country) => async (dispatch) => {
    try {
          console.log(dispatch)
        const response = await axiosInstance.post('/country', country);
        console.log('AddCountryAction', response)
        dispatch({
            type: "ADD_COUNTRY",
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


export const GetSingleCountry = (id) => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/country/${id}`);
        console.log('GetSingleCountry', response)
        dispatch({
            type: "GET_SINGIL_COUNTRY",
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};


export const UpdateCountry = (country, id) => async (dispatch) => {
    try {
        console.log(".....",country)
        const response = await axiosInstance.put(`/country/${id}`, country);
        console.log('UpdateCountry', response)
        dispatch({
            type: "UPDATE_COUNTRY",
            payload: response.data,
        });
        toast.success(`${response.data.name} was updated successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};


export var total;
export const getCountryPaginationtList = (pag) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.post(`/country/pagination?page=${pag}`);
        console.log('response',response)
        console.log('responseg',response.data.data)
        total = response.data.pages;
        dispatch({
            type: "GET_COUNTRY_LIST_PAGE",
            payload: response.data.data
        });
    } catch (err) {
        console.log(err);
    }}