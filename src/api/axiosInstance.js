import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://54.66.77.105:8080',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance;