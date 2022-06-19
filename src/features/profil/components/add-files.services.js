import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/pdf, application/json',
          'Authorization' : 'Bearer 19|wYusCMVKayyHjo0VHqEue5h9PtrjbpsOD965clF1',
      },
      timeout: 3000
  })

  const uploadFiles = (file, fieldId) => {
    fileData = new FormData();
    for (let key in Object.keys.file) {
      fileData.append(key, file[key]);
    }
    return api.post('files/create', {'document': file, fieldId} ,{
      onUploadProgress: (e) => {
        const progress = e.loaded / e.total
      }
    })
  }

  return {uploadFiles}

}

export default {
    create
}