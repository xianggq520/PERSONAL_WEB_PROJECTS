import axiosService from './fetch'

export function getHomeData (params){
    return axiosService.get('/enterpriseuniversity/services/api/getMethod',{
        params:params
    })
}

