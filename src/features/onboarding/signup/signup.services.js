import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          'Accept': 'application/json'
      },
      timeout: 3000
  })

  const register =  (user) => {
    sendUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      status_id: user.status_id,
      password: user.password,
    }
    return api.post('/auth/register', {first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      status_id: user.status_id,
      password: user.password,})
  }

  return {register}

}

export default {
    create
}