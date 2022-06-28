import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      timeout: 3000
  })

  const fields = (token) => {
    return api.get('fields', {},{ headers:{
      'Accept': 'application/json',
      'Authorization' : 'Bearer ' + token
    }})
  }


  const getFiles = (token) => {
    return api.get('files', {}, { headers:{
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

  return {fields, getFiles, getGuarantorFiles}

}

export default {
    create
}