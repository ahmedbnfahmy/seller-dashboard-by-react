import axios from 'axios'
export const axiosInstance = axios.create({
    baseURL:'https://ecommerce-dashboard-website-api2.onrender.com/api'
});

axiosInstance.interceptors.request.use(
    function(config){
        config.headers['Authorization'] = localStorage.getItem('token');
        config.headers['Access-Control-Allow-Origin'] = '*';
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
)

export const APIURL = 'https://ecommerce-dashboard-website-api2.onrender.com/'