import apisauce from 'apisauce'

// const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/pdf, application/json',
          'Authorization' : 'Bearer 19|wYusCMVKayyHjo0VHqEue5h9PtrjbpsOD965clF1',
          'Content-Type' : 'multipart/form-data'
      },
      timeout: 3000
  })

  const uploadFiles = (file, fieldId) => {
    fileData = new FormData();
    fileData.append('document', {
      name: file.name,
      type: file.type,
      uri: file.uri,
    });
    fileData.append('field_id',fieldId);
    // for (let key in Object.keys.file) {
    //   fileData.append(key, file[key]);
    // }
    console.log(fileData)
    return api.post('https://demo8903346.mockable.io/pdf', fileData ,{
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