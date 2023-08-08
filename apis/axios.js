import Axios from 'axios';

const AxiosInstance = Axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_BASE
});

export default AxiosInstance;
