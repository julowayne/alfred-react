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


  const createGuarantor = (token, guarantor, userId) => {

    return api.post('/guarantors/create', guarantor , 
      { 
        headers:{
          'Accept': 'application/json',
          'Authorization' : 'Bearer ' + token,
      }
    }, {
        user_id : userId,
        first_name: guarantor.first_name,
        last_name: guarantor.last_name,
      })
  }

  return {updateGuarantor, createGuarantor}

}

export default {
    create
}