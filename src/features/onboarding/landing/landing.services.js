import apisauce from 'apisauce'

const create = (baseURL = 'https://alfred-api-eu.herokuapp.com/api/') => {
    const api = apisauce.create({
        baseURL,
        headers:{
            'Accept': 'application/json'
        },
        timeout: 3000
    })

    const getStatus = () => {
        return api.get('status')
    }

    return {
        getStatus
    }
}

export default {
    create
}