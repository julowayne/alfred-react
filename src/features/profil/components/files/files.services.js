import apisauce from 'apisauce'
import {useSelector } from 'react-redux';
// import store from '../../../../core/app.store';

// const state = store.getState();
// const authToken = state.user.token;
// const counter = useSelector((state) => state.user.token)
const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      timeout: 3000
  })

  const getFiles = (token) => {
    return api.get('files', { headers:{
      'Accept': 'application/json',
      'Authorization' : 'Bearer ' + token,
    }})
  }

  const deleteFile = (token, id) => {
    return api.delete('files/'+ id, {}, { headers:{
      'Accept': 'application/json',
      'Authorization' : 'Bearer ' + token,
    }})
  }

  const getGuarantorFiles = (token) => {
    return api.get('guarantors/files', {}, { headers:{
      'Accept': 'application/json',
      'Authorization' : 'Bearer ' + token,
    }})
  }

  return {getFiles, deleteFile, getGuarantorFiles}

}


export default {
    create
}