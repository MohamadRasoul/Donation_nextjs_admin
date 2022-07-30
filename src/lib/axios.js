import Axios from 'axios'

const TOKEN =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null

const axios = Axios.create({
    baseURL: `http://localhost:8000/api/`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${TOKEN}`,
    },
    // withCredentials: true,
})

export default axios
