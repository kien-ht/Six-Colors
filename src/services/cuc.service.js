import axios from 'axios'
import { FAKE_DOMAIN } from '../.env'
const harcodeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMWJ0dWEweHA5cjE2MTk1MTEyNDc5NzMiLCJpYXQiOjE2MTk1OTkwNzIsImV4cCI6MTYxOTY4NTQ3Mn0.qbHpvDoXU_VeICwgqidSenXh0CcDNLO7VMu-xdlnASY"
const token = localStorage.getItem('token') || harcodeToken

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