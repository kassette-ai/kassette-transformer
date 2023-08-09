import Axios from './axios';

const CreateNewDestination = async (payload) => {
    return Axios.post('/destination', payload)
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const ModifyDestination = async (payload) => {
    return Axios.patch(`/destination`, payload)
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const FetchAllDestinations = async () => {
    return Axios.get('/destination', {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const GetDestinationDetailByID = async(destinationID) => {
    return Axios.get(`/destination/${destinationID}`, {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const DeleteDestinationByID = async(destinationID) => {
    return Axios.delete(`/destination/${destinationID}`, {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

export {
    CreateNewDestination,
    ModifyDestination,
    FetchAllDestinations,
    GetDestinationDetailByID,
    DeleteDestinationByID,
}
