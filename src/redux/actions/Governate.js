import { axiosInstance } from '../../netWork/netWork'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllGovernment = () => async (dispatch) => {
    try {
        // console.log(dispatch)
        const response = await axiosInstance.get(`/governate`);
        console.log('getAllGovernment', response)
        dispatch({
            type: "GET_ALL_GOVERMENT",
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};


export const AddGovAction = (gov) => async (dispatch) => {
    try {
        console.log(dispatch, 'dispatch')
        const response = await axiosInstance.post('/governate', gov);
        console.log('AddGovAction', response)
        dispatch({
            type: "ADD_NEW_GOV",
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


export const deleteGov = (id) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.delete(`/governate/${id}`);
        const res = await axiosInstance.get(`/governate`);
        console.log('deleteGov',response)
        dispatch({
            type: "DELET_GOV",
            payload: res.data,
        });
        toast.success(`governate was deleted successfully`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {
        console.log(err);
        toast.error(`${err.message} `, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

export const GetSingleGov = (govname) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.get(`/governate/Gov/${govname}`);
        console.log('GetSingleGov',response)
        dispatch({
            type: "GET_SINGIL_GOV",
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const UpdateGov = (gov, id) => async (dispatch) => {
    try {
        //   console.log(dispatch)
        const response = await axiosInstance.put(`/governate/${id}`, gov);
        console.log('UpdateGov',response)
        dispatch({
            type: "UPDATE_GOV",
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
// export var govaction;
export const getGovPaginationtList = (pag) => async (dispatch) => {
    try {
        console.log(dispatch)
        const response = await axiosInstance.post(`/governate/pagination?page=${pag}`);
        console.log('response',response)
        console.log('responseg',response.data.data)
        total = response.data.pages;
        // govaction=response.data.data
        dispatch({
            type: "GET_GOV_LIST_PAGE",
            payload: response.data.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const getAllGovernmentByCountryName = (countryName) => async (dispatch) => {
    try {
        // console.log(dispatch)
        const response = await axiosInstance.get(`/governate/${countryName}`);
        console.log('getAllGovernment', response)
        dispatch({
            type: "GET_ALL_GOVERMENT_NAME_COUNTRY",
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};