import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
  const api = apisauce.create({
      baseURL,
      headers:{
          // 'Cache-Control': 'no-cache',
          'Accept': 'application/json',
          'Authorization' : 'Bearer 19|wYusCMVKayyHjo0VHqEue5h9PtrjbpsOD965clF1',
      },
      timeout: 3000
  })

  const updateProfil = (data) => {


    userData = new FormData();
    userData.append('document', {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      birthday: data.birthday,
      status_id: data.status_id,
    });

    // Récupérer l'id dans redux
    return api.put('/users/', userData ,{
      onUploadProgress: (e) => {
        const progress = e.loaded / e.total
      }
    })
  }

  return {updateProfil}

}

export default {
    create
}