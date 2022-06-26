import apisauce from 'apisauce'
import {connect} from 'react-redux';
// import store from '../../../../core/app.store';

// const state = store.getState();
// const authToken = state.user.token;

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/json',
          'Authorization' : 'Bearer 32|QiwPjkNT6g0pGJRhMnlt7JKY8DPNjF6CiEaDaZDF',
      },
      timeout: 3000
  })

  const getFiles = () => {
    return api.get('files')
  }

  const deleteFile = (id) => {
    console.log(id)
    return api.delete('files/'+ id)
  }

  return {getFiles, deleteFile}

}


export default {
    create
}