import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/json'
      },
      timeout: 3000
  })

  const logging =  (email, password) => {
    return api.post('/auth/login', {email, password}, {
      onUploadProgress: (e) => {
        const progress = e.loaded / e.total
      }
    })
  }

  return {logging}

}

export default {
    create
}