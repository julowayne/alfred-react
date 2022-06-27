import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      timeout: 3000
  })

  const updateProfil = (token, update, id) => {

    return api.put('/users/' + id, update , {headers:{
      'Accept': 'application/json',
      'Authorization' : 'Bearer ' + token,
  }})
  }

  return {updateProfil}

}

export default {
    create
}