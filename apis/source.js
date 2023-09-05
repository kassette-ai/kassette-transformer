import Axios from './axios';

const CreateNewSource = async (payload) => {
    return Axios.post('/source', payload)
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const ModifySource = async (payload) => {
    return Axios.patch(`/source`, payload)
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const FetchAllSources = async () => {
    return Axios.get('/source', {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const GetSourceDetailByID = async(sourceID) => {
    return Axios.get(`/source/${sourceID}`, {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const DeleteSourceByID = async(sourceID) => {
    return Axios.delete(`/source/${sourceID}`, {})
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

const GetFieldOptions = async(destCataName) => {
    const urlParams = new URLSearchParams({type: 'source', name: destCataName});
    return Axios.get(`/field-options?${urlParams.toString()}`)
        .then((res) => res.data)
        .catch((err) => {throw err;});
}

export {
    CreateNewSource,
    ModifySource,
    FetchAllSources,
    GetSourceDetailByID,
    DeleteSourceByID,
    GetFieldOptions,
}
