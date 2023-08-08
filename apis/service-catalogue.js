import Axios from './axios';

const CreateNewServiceCatalogue = async (payload) => {
    return Axios.post('/service-catalogue', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => res.data)
      .catch((err) => {throw err;});
}

const GetServiceCatalogue = async (type) => {
  const queryType = type == 'sources' ? 'src' : 'dest';
  return Axios.get(`/service-catalogue?type=${queryType}`, {})
    .then((res) => res.data)
    .catch((err) => {throw err;});
}

const GetServiceCatalogueByID = async (id) => {
  return Axios.get(`/service-catalogue/${id}`, {})
    .then((res) => res.data)
    .catch((err) => {throw err;});
}

export {
    CreateNewServiceCatalogue,
    GetServiceCatalogue,
    GetServiceCatalogueByID,
}
