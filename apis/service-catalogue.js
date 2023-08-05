import Axios from './axios';

const CreateNewServiceCatalogue = async (payload) => {
    return Axios.post('/service-catalogue', payload)
        .then((res) => res.json())
        .catch((err) => {throw err;})
}

export {
    CreateNewServiceCatalogue,
}
