import axios from 'axios'
import { FAKE_DOMAIN } from '../.env'

const token = localStorage.getItem('token')

const baseInstance = axios.create({
    baseURL: FAKE_DOMAIN
})

baseInstance.interceptors.request.use((request) => {
    request.headers.authorization = token
    return request
})

baseInstance.interceptors.response.use((response) => {
    return response.data
})

export default baseInstance