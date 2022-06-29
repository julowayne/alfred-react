import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      timeout: 3000
  })

  const updateGuarantor = (token, update, id) => {
    return api.put('/guarantors/' + id, update , {headers:{
      'Accept': 'application/json',
      'Authorization' : 'Bearer ' + token,
    }})
  }


  const createGuarantor = (token, guarantor) => {

    return api.post('/guarantors/create', guarantor , 
      { 
        headers:{
          'Accept': 'application/json',
          'Authorization' : 'Bearer ' + token,
      }
    })
  }

  return {updateGuarantor, createGuarantor}

}

export default {
    create
}