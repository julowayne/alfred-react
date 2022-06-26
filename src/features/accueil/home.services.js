import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/json',
          // 'Authorization' : 'Bearer 19|wYusCMVKayyHjo0VHqEue5h9PtrjbpsOD965clF1'
          'Authorization' : 'Bearer 32|QiwPjkNT6g0pGJRhMnlt7JKY8DPNjF6CiEaDaZDF'
      },
      timeout: 3000
  })

  const fields = () => {
    return api.get('fields', {
      onUploadProgress: (e) => {
        const progress = e.loaded / e.total
      }
    })
  }

  const getFiles = () => {
    return api.get('files')
  }

  return {fields, getFiles}

}

export default {
    create
}