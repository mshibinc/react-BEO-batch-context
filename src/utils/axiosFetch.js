import axios from 'axios';
const baseUrl =
    import.meta.env.VITE_BASE_URL;

const axiosConfig = axios.create({
    baseURL: baseUrl,
    // paramsSerializer: (params) => queryString.stringify({ params }),
    paramsSerializer: (params) => params,
});

// let token=localStorage.getItem('myaccess')

axiosConfig.interceptors.request.use(async(config) => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            // "Content-Type": "application/*",
            Authorization: `Bearer `,
            // Authorization: `Bearer ${token}`,
        },
    };
});

axiosConfig.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        } else {
            return response;
        }
    },
    (err) => {
        if (!err.response) {
            console.log("Err! Network err!");
        }
        throw err;
    }
);

export default axiosConfig;