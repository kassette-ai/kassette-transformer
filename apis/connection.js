import Axios from './axios';

const CreateNewConnection = async (payload) => {
    return Axios.post('/connection', payload)
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const ModifyConnection = async (payload) => {
    return Axios.patch(`/connection`, payload)
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const FetchAllConnections = async () => {
    return Axios.get('/connection', {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const GetConnectionDetailByID = async(connectionID) => {
    return Axios.get(`/connection/${connectionID}`, {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const DeleteConnectionByID = async(connectionID) => {
    return Axios.delete(`/connection/${connectionID}`, {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

export {
    CreateNewConnection,
    ModifyConnection,
    FetchAllConnections,
    GetConnectionDetailByID,
    DeleteConnectionByID,
}
