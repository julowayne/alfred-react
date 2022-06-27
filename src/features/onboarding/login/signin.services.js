import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          'Accept': 'application/json'
      },
      timeout: 3000
  })

  const logging =  (email, password) => {
    return api.post('/auth/login', {email, password})
  }

  return {logging}

}

export default {
    create
}