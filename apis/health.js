import Axios from './axios';

const GetServerHealth = async () => {
    return Axios.get('/router-job-status', {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

export {
    GetServerHealth
}
