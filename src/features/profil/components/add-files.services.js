import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      timeout: 3000
  })

  const uploadFiles = (token, file, fieldId, guarantorId) => {
    console.log(guarantorId)
    fileData = new FormData();
    fileData.append('document', {
      name: file.name,
      type: file.type,
      uri: file.uri,
    });
    fileData.append('field_id',fieldId);
    if(guarantorId) fileData.append('guarantor_id', guarantorId);
    return api.post('files/create', fileData ,{headers:{
      'Accept': 'application/pdf, application/json',
      'Authorization' : 'Bearer ' + token,
      'Content-Type' : 'multipart/form-data'
  }})
  }

  return {uploadFiles}

}

export default {
    create
}