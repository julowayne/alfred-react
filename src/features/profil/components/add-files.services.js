import apisauce from 'apisauce'
// import RNGRP from 'react-native-get-real-path'

// const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/pdf, application/json',
          'Authorization' : 'Bearer 32|QiwPjkNT6g0pGJRhMnlt7JKY8DPNjF6CiEaDaZDF',
          'Content-Type' : 'multipart/form-data'
      },
      timeout: 3000
  })

  const uploadFiles = (file, fieldId) => {


    // RNFetchBlob.fs
    // .writeFile(RNFetchBlob.fs.dirs.DocumentDir + "/" + file.name, RNFetchBlob.base64.encode(file.uri), 'base64')
    // .then((data) => {
    //   console.log(data)
    //   console.log(RNFetchBlob.fs.dirs.DocumentDir+ "/" + file.name)
    //   console.log(RNFetchBlob.fs.asset(file.name))
    // })
    // .catch((err) => {console.log(err)});


    // RNFetchBlob.fs
    // .readFile(RNFetchBlob.fs.dirs.DocumentDir+ "/" + file.name, 'base64')
    // .then((data) => {
    //   console.log('read : ' + data)
    // })
    // .catch((err) => {});
    // RNGRP.getRealPathFromURI(file.uri).then(filePath =>
    //   console.log(filePath)
    // )

    fileData = new FormData();
    fileData.append('document', {
      name: file.name,
      type: file.type,
      uri: file.uri,
    });
    fileData.append('field_id',fieldId);
    return api.post('files/create', fileData ,{
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