import apisauce from 'apisauce'
import {useSelector } from 'react-redux';
// import store from '../../../../core/app.store';

// const state = store.getState();
// const authToken = state.user.token;
// const counter = useSelector((state) => state.user.token)
const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/json',
          'Authorization' : 'Bearer 46|oRvYRxSpSs8cg29BW5aD5E2uWeAlpsNdbDNW2CEr',
      },
      timeout: 3000
  })

  const getFiles = () => {
    return api.get('files')
  }

  const deleteFile = (id) => {
    return api.delete('files/'+ id)
  }

  return {getFiles, deleteFile}

}


export default {
    create
}